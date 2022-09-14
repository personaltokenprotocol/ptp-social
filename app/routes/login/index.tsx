import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, Scripts, useSubmit } from "@remix-run/react";

import { loginWithMetamask } from "~/blockchain/metamask";

import { db } from "~/utils/db.server";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

import { subscribeToEvents } from "~/blockchain/wallet-connect";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const address = form.get("address");

  if (!address || typeof address !== "string") return null;

  let user;

  try {
    user = await db.user.findUnique({
      where: {
        address,
      },
    });
  } catch (error) {
    throw new Error("cannot find user, error: " + error);
  }

  console.log(user?.address);

  if (!user?.address) {
    console.log("[BFF][login] User not found. Creating new user.");
    await db.user.create({
      data: {
        address,
      },
    });
  }

  return redirect(`/dashboard`);
};

export default function Navbar() {
  const submit = useSubmit();

  const handleLoginMetamask = async () => {
    const address = await loginWithMetamask();

    const formData = new FormData();

    formData.append("address", address);

    submit(formData, {
      action: "/login/?index",
      method: "post",
      encType: "application/x-www-form-urlencoded",
      replace: true,
    });
  };

  const handleLoginWalletConnect = async () => {
    console.log("handleLoginWalletConnect");

    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector: WalletConnect = new WalletConnect({
      bridge, // Required
      qrcodeModal: QRCodeModal,
    });

    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }

    // subscribe to events
    await subscribeToEvents(connector);
  };

  return (
    <nav className="bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block">
            Personal token
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 "
          >
            Polygon
          </button>

          <button
            type="button"
            className="text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 hidden sm:block"
            onClick={handleLoginMetamask}
          >
            Connect wallet with Metamask
          </button>

          <button
            type="button"
            className="text-white bg-third hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:hidden"
            onClick={handleLoginWalletConnect}
          >
            Connect wallet with WalletConnect
          </button>
        </div>
      </div>
    </nav>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head></head>
      <body>
        {error.message}
        <Scripts />
      </body>
    </html>
  );
}
