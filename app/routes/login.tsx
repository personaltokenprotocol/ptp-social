import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useSubmit } from "@remix-run/react";

import { signWithMetamask } from "~/blockchain/metamask";

import { authenticate } from "~/login";

import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const address = form.get("address");
  const signature = form.get("signature");
  const nonce = form.get("nonce");

  if (!address || typeof address !== "string") return null;
  if (!signature || typeof signature !== "string") return null;
  if (!nonce) return null;

  const isAuthenticated = await authenticate(
    address,
    signature,
    nonce as unknown as number
  );

  if (!isAuthenticated) return null;

  const user = await db.user.create({
    data: {
      address,
    },
  });

  return redirect(`login/${user.address}`);
};

export default function Login() {
  const submit = useSubmit();

  async function handleSign() {
    const [address, signature, nonce] = await signWithMetamask();

    const formData = new FormData();

    // @ts-ignore
    formData.append("address", address);
    // @ts-ignore
    formData.append("signature", signature);
    // @ts-ignore
    formData.append("nonce", nonce);

    submit(formData, {
      action: "/login",
      method: "post",
      encType: "application/x-www-form-urlencoded",
      replace: true,
    });
  }

  return (
    <div className="p-16 flex gap-4">
      <button
        className="bg-third text-white font-bold rounded p-2"
        onClick={handleSign}
      >
        Sign with Metamask
      </button>

      <Outlet />
    </div>
  );
}
