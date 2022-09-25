import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { GraphQLClient } from "graphql-request";

import { GetProfile } from "~/blockchain/lens-api";

import { transformToIpfsCoverImageUrl, transformToIpfsUrl } from "~/utils/ipfs";
import { convertToTwitterUrl, urlify } from "~/utils/text";

import { GoLocation } from "react-icons/go";
import { TbWorld, TbHash } from "react-icons/tb";
import { AiOutlineTwitter, AiOutlineMessage } from "react-icons/ai";

import NavbarLogged from "~/components/NavbarLogged";
import { db } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return {
    title: "Profile",
    description: "Profile",
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  console.log(`[BFF] Loading profile ${params.profile}...`);

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const variables = {
    request: { handle: params.profile },
  };

  const response = await lens.request(GetProfile, variables);

  const profile = response.profile;

  const user = await db.user.findMany({
    where: {
      connected: true,
    },
  });

  if (user.length === 0) {
    throw new Error("No user connected");
  }

  return { profile, user };
};

export default function Profile() {
  const data = useLoaderData();

  console.log("[BFF][dashboard] data:", data);

  return (
    <>
      <div className="">
        <NavbarLogged address={data.user[0].address} />

        <div className="fixed bg-third rounded-xl z-10 p-2 m-2 text-white">
          <Link to="/dashboard">Back</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative w-full">
            <img
              src={transformToIpfsCoverImageUrl(
                data.profile.coverPicture?.original?.url
              )}
              alt="cover"
              className="bg-cover bg-center h-36 w-full object-cover shadow-md"
            />
          </div>

          <div className="grid grid-cols-2 text-center order-last md:order-first mt-10 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {data.profile.stats.totalFollowing}
              </p>
              <p className="text-gray-400">Following</p>
            </div>

            <div>
              <p className="font-bold text-gray-700 text-xl">
                {data.profile.stats.totalFollowers}
              </p>
              <p className="text-gray-400">Followers</p>
            </div>
          </div>

          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-12 flex items-center justify-center">
              {data.profile.picture ? (
                <img
                  className="rounded-full"
                  src={transformToIpfsUrl(data.profile.picture?.original?.url)}
                  alt="avatar"
                />
              ) : (
                <div className="w-24 h-24 bg-first rounded-full flex items-center justify-center ">
                  <p className="text-center text-white text-4xl">
                    {data.profile.name?.charAt(0)}
                  </p>{" "}
                </div>
              )}
            </div>
          </div>

          <div className="m-auto">
            <div className="flex mt-20 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-3 uppercase rounded-md bg-lens mr-2">
                <div>
                  <img
                    src="./LENS LOGO__Lens_ icon.png"
                    alt="lens"
                    className="w-5 h-5"
                  />
                </div>
              </button>

              <Link
                to={`/notifications/${data.profile.handle}`}
                prefetch="intent"
              >
                <button
                  id="message"
                  className="text-white py-2 px-3 uppercase rounded-md bg-second ml-2"
                >
                  <div>
                    <AiOutlineMessage className="w-5 h-5" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <h1 className="text-4xl font-medium text-gray-700">
            {data.profile.name}
          </h1>

          <p className="font-extrabold text-gray-600 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-first to-third">
            @{data.profile.handle}
          </p>
        </div>

        <div className="text-center border-b-2 p-6">
          <p className="font-extralight text-sm text-gray-500 whitespace-pre-line">
            {data.profile.bio}
          </p>
        </div>

        <div className="p-6">
          <div className="flex p-1">
            <div>
              <TbHash className="w-5 h-5" />
            </div>

            <div className="text-sm pl-2">{data.profile.id}</div>
          </div>

          {data.profile.attributes[0].key == "location" && (
            <div className="flex p-1">
              <div>
                <GoLocation className="w-5 h-5" />
              </div>

              <div className="text-sm pl-2">
                {" "}
                {data.profile.attributes[0].value}{" "}
              </div>
            </div>
          )}

          {data.profile.attributes[1].key == "website" && (
            <div className="flex p-1">
              <div>
                <TbWorld className="w-5 h-5" />
              </div>

              <a
                href={data.profile.attributes[1].value}
                className="text-sm pl-2"
              >
                {urlify(data.profile.attributes[1].value)}
              </a>
            </div>
          )}

          {data.profile.attributes[2].key == "twitter" && (
            <div className="flex p-1">
              <div>
                <AiOutlineTwitter className="w-5 h-5" />
              </div>

              <a
                href={convertToTwitterUrl(data.profile.attributes[2].value)}
                className="text-sm pl-2"
              >
                {data.profile.attributes[2].value}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
