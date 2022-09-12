import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useSubmit } from "@remix-run/react";

import Footer from "~/components/Footer";

import { loginWithMetamask } from "~/blockchain/metamask";

import { MdVisibility, MdFavorite } from "react-icons/md";

const COLOR = "#06D6A0";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const address = form.get("address");

  if (!address || typeof address !== "string") return null;

  return redirect(`/dashboard`);
};

export default function Login() {
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
    <div>
      <Outlet />

      <div className="pt-10 grid place-items-center">
        <h1 className="text-2xl font-semibold">Connect wallet</h1>

        <div className="mt-10 rounded-xl shadow-ptp p-5 grid place-items-center w-5/6 sm:w-1/3">
          <button
            type="button"
            className="text-white bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 disabled:opacity-50"
            onClick={handleLogin}
          >
            Connect wallet
          </button>

          <div className="pt-5">
            <ul>
              <li>
                <div className="flex p-3 ">
                  <MdVisibility color={COLOR} className="w-8 h-8 m-auto" />
                  <p className="px-6 w-full">
                    View only permission. We will never do anything without your
                    approval
                  </p>
                </div>
              </li>

              <li>
                <div className="flex p-3 ">
                  <MdFavorite color={COLOR} className="w-8 h-8 m-auto" />
                  <p className="px-6 w-full">Trusted by 2 users</p>
                </div>
              </li>

              <li>
                <div className="flex p-3">
                  <img
                    src="/lens-logo.jpeg"
                    alt="lens"
                    className="rounded-full w-8 -mx-1"
                  />
                  <p className="px-7">We using Lens protocol</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
