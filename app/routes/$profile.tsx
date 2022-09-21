import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { GraphQLClient } from "graphql-request";

import { GetProfile } from "~/blockchain/lens-api";
import { transformToIpfsCoverImageUrl, transformToIpfsUrl } from "~/utils/ipfs";

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

export default function Profile() {
  const data = useLoaderData();

  console.log("[BFF][dashboard] data:", data);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative w-full">
          <img
            src={transformToIpfsCoverImageUrl(data.coverPicture?.original?.url)}
            alt="cover"
            className="bg-cover bg-center h-64 w-full object-cover shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 text-center order-last md:order-first mt-10 md:mt-0">
          <div>
            <p className="font-bold text-gray-700 text-xl">
              {data.stats.totalFollowing}
            </p>
            <p className="text-gray-400">Following</p>
          </div>

          <div>
            <p className="font-bold text-gray-700 text-xl">
              {data.stats.totalFollowers}
            </p>
            <p className="text-gray-400">Followers</p>
          </div>
        </div>

        <div className="relative">
          <div className="w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
            {data.picture ? (
              <img
                className="rounded-full"
                src={transformToIpfsUrl(data.picture?.original?.url)}
                alt="avatar"
              />
            ) : (
              <div className="w-48 h-48 bg-first rounded-full flex items-center justify-center ">
                <p className="text-center text-white text-7xl">
                  {data.name?.charAt(0)}
                </p>{" "}
              </div>
            )}
          </div>
        </div>

        <div className="m-auto">
          <div className="flex mt-32 md:mt-0 md:justify-center">
            <div className="pr-3">
              <span id="lens-follow-icon" data-handle={data.handle} />
            </div>

            <button className="text-white py-2 px-4 uppercase rounded-xl  bg-second font-medium">
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 pl-5 text-center">
        <h1 className="text-4xl font-medium text-gray-700">{data.name}</h1>

        <p className="font-extrabold text-gray-600 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-first to-third">
          @{data.handle}
        </p>
      </div>

      <div className="text-center border-b-2 p-6">
        <p className="font-extralight text-sm text-gray-500">{data.bio}</p>
      </div>

      <div className="p-6">
        <div className="flex">
          <div className="text-sm"># &nbsp;</div>

          <div className="text-sm">{data.id}</div>
        </div>

        <div className="flex">
          <div className="text-sm"> # &nbsp;</div>

          <div className="text-sm"> {data.attributes[0].value} </div>
        </div>
      </div>
    </div>
  );
}
