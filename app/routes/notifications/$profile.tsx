import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { GraphQLClient } from "graphql-request";

import { GetProfile } from "~/blockchain/lens-api";

import { transformToIpfsUrl } from "~/utils/ipfs";

export const loader: LoaderFunction = async ({ params }) => {
  console.log(`[BFF] Loading profile ${params.profile}...`);

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const variables = {
    request: { handle: params.profile },
  };

  const response = await lens.request(GetProfile, variables);

  const profile = response.profile;

  return profile;
};

export default function Notifications() {
  const data = useLoaderData();

  return (
    <div className="w-full">
      <div className="flex p-6 shadow-md">
        {data.picture ? (
          <img
            className="w-12 h-12 rounded-full"
            src={transformToIpfsUrl(data.picture?.original?.url)}
            alt="avatar"
          />
        ) : (
          <div className="w-10 h-10 bg-first rounded-full ">
            <p className="text-center mt-1.5 text-white pt-0.5">
              {data.name?.charAt(0)}
            </p>
          </div>
        )}

        <div className="content-start my-auto">
          {true ? (
            <p className="text-black text-sm font-bold px-3">{data.name}</p>
          ) : (
            <p className="text-black text-sm font-bold px-3">{data.handle}</p>
          )}

          <p className="text-gray-500 text-xs px-3">@{data.handle}</p>
        </div>
      </div>

      <Outlet />

      {/* <div className="w-full p-6">Aparece mensaje de mierda</div> */}

      <div className="fixed bottom-0 w-full">
        <div className="p-2">
          <input
            type="text"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-3"
          ></input>
        </div>
      </div>
    </div>
  );
}
