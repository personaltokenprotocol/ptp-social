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
    <div>
      <div className=" bg-white shadow">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative w-full">
            <img
              src={transformToIpfsCoverImageUrl(
                data.coverPicture?.original?.url
              )}
              alt="cover"
              className="bg-cover bg-center h-64 w-full object-cover rounded-b-md"
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

          <div className="grid grid-cols-3 text-center order-last md:order-first mt-10 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {data.stats.totalComments}
              </p>
              <p className="text-gray-400">Comments</p>
            </div>

            <div>
              <p className="font-bold text-gray-700 text-xl">
                {data.stats.totalPosts}
              </p>
              <p className="text-gray-400">Posts</p>
            </div>

            <div>
              <p className="font-bold text-gray-700 text-xl">
                {data.stats.totalMirrors}
              </p>
              <p className="text-gray-400">Mirrors</p>
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
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

        <div className="mt-10 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">{data.name}</h1>

          <p className="font-light text-gray-600 mt-3">@{data.handle}</p>

          <p className="font-light text-gray-600 mt-3">{data.id}</p>

          {/* <p className="mt-8 text-gray-500">
            Solution Manager - Creative Tim Officer
          </p> */}

          {/* <p className="mt-2 text-gray-500">University of Computer Science</p> */}
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            {data.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
