import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, useSubmit } from "@remix-run/react";

import { loginWithMetamask } from "~/blockchain/metamask";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const address = form.get("address");

  if (!address || typeof address !== "string") return null;

  return redirect(`/dashboard`);
};

export default function Navbar() {
  const submit = useSubmit();

  const handleLogin = async () => {
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
            className="text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
            onClick={handleLogin}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
