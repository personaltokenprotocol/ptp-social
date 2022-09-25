import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Outlet, useLoaderData, useSubmit } from "@remix-run/react";

import { useRef } from "react";

import { GraphQLClient } from "graphql-request";

import { GetProfile } from "~/blockchain/lens-api";
import { db } from "~/utils/db.server";

import { sendNotification } from "~/blockchain/enps";

import { transformToIpfsUrl } from "~/utils/ipfs";

export const action: ActionFunction = async ({ request }) => {
  console.log("[BFF][notifications] Sending notification...");
  const form = await request.formData();

  const message = form.get("message");
  const sender = form.get("sender");

  await sendNotification(
    sender as string,
    message as string,
    "0x3aeC2276326CDC8E9a8A4351c338166e67105AC3"
  );

  return redirect(`/notifications/${sender}`);
};

export const loader: LoaderFunction = async ({ params }) => {
  console.log("[BFF][notifications] Fetching user account ...");
  const user = await db.user.findMany({
    where: {
      connected: true,
    },
  });

  if (user.length === 0) {
    throw new Error("No user connected");
  }

  console.log(`[BFF][notifications] Loading profile ${params.profile} ...`);

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const variables = {
    request: { handle: params.profile },
  };

  const response = await lens.request(GetProfile, variables);

  const profile = response.profile;

  return { profile, user };
};

export default function Notifications() {
  const data = useLoaderData();

  const submit = useSubmit();

  const formRef = useRef<HTMLFormElement>(null); //Add a form ref.

  const handleSendMessage = async () => {
    console.log(
      "[browser][handleSendMessage] Formating message and send to EPNS service ..."
    );

    const formData = new FormData(formRef.current as HTMLFormElement);

    console.log(formData);
    // const formData = new FormData();

    formData.append("sender", data.user[0].address);
    // formData.append("connected", "true");

    submit(formData, {
      action: `/notifications/${data.profile.handle}`,
      method: "post",
      encType: "application/x-www-form-urlencoded",
      replace: true,
    });
  };

  return (
    <div className="w-full">
      <div className="flex p-6 shadow-md">
        {data.profile.picture ? (
          <img
            className="w-12 h-12 rounded-full"
            src={transformToIpfsUrl(data.profile.picture?.original?.url)}
            alt="avatar"
          />
        ) : (
          <div className="w-10 h-10 bg-first rounded-full ">
            <p className="text-center mt-1.5 text-white pt-0.5">
              {data.profile.name?.charAt(0)}
            </p>
          </div>
        )}

        <div className="content-start my-auto">
          {true ? (
            <p className="text-black text-sm font-bold px-3">
              {data.profile.name}
            </p>
          ) : (
            <p className="text-black text-sm font-bold px-3">
              {data.profile.handle}
            </p>
          )}

          <p className="text-gray-500 text-xs px-3">@{data.profile.handle}</p>
        </div>
      </div>

      <Outlet />

      <div className="fixed bottom-0 w-full">
        <div className="p-2">
          <Form ref={formRef}>
            <label>
              <input
                name="message"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md p-2"
              />
              {/* <input name="sender" value={data.user[0]?.address} /> */}
            </label>

            <button
              type="submit"
              className="bg-second rounded-xl text-white p-2 mt-2"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
