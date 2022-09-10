import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useSubmit } from "@remix-run/react";

import { signWithMetamask } from "~/blockchain/metamask";
import Footer from "~/components/Footer";

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
  return (
    <div>
      <Outlet />

      <div className="pt-10 grid place-items-center">
        <h1 className="text-2xl font-semibold ">Connect wallet</h1>
        <div className="mt-10">
          <button
            type="button"
            className="text-white bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 disabled:opacity-50"
            disabled
          >
            Connect wallet
          </button>

          <div>
            <ul>
              <li>
                View only permission !!. We will never do anything withot your
                approval
              </li>
              <li>Trusted by 0 persons</li>
              <li>Lens protocol</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
