import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useSubmit, useTransition } from "@remix-run/react";

import { loginWithMetamask } from "~/blockchain/metamask";

import { db } from "~/utils/db.server";

import Footer from "~/components/Footer";
import { MdVisibility, MdFavorite } from "react-icons/md";

import { BiMessageAltDetail } from "react-icons/bi";

const COLOR = "#FF006E";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const address = form.get("address");

  if (!address || typeof address !== "string") return null;

  return redirect(`/dashboard`);
};

export const loader: LoaderFunction = async () => {
  const users = await db.user.findMany();

  console.log(users);

  return null;
};

export default function Login() {
  const submit = useSubmit();
  const transition = useTransition();

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

  // console.log("[browser][Login] transition ", transition);

  return (
    <div>
      <Outlet />

      {transition.state === "idle" && (
        <div className="pt-10 grid place-items-center">
          <h1 className="text-2xl font-semibold p-10 text-center">
            Send message to Lens profiles
          </h1>

          <BiMessageAltDetail color={COLOR} className="w-40 h-40 m-auto" />

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
                      View only permission. We will never do anything without
                      your approval
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
      )}

      {transition.state === "loading" && (
        <div className="pt-10 grid place-items-center">
          <h1 className="text-2xl font-semibold">Connecting with garden </h1>
          <img src="/LENS_pattern_3.gif" alt="lens" />
        </div>
      )}

      <Footer />
    </div>
  );
}
