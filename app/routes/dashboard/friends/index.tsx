import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { GraphQLClient } from "graphql-request";

import { GetDefaultProfile, GetProfile } from "~/blockchain/lens-api";

import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  const user = await db.user.findMany({
    where: {
      connected: true,
    },
  });

  if (user.length === 0) {
    throw new Error("No user connected");
  }

  console.log(
    `[BFF][friends] Fetching profile from lens protocol ${user[0].address} ...`
  );

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const variables = {
    request: { ethereumAddress: user[0].address },
  };

  const response = await lens.request(GetDefaultProfile, variables);

  const profile = response.defaultProfile;

  console.log(profile);

  return { profile, user };
};

export default function Friends() {
  const { profile } = useLoaderData();

  console.log(profile);

  return (
    <div className="grid grid-cols-2 text-center order-last md:order-first p-8 md:mt-0">
      <div>
        <p className="font-bold text-gray-700 text-xl">
          {profile?.stats?.totalFollowing}
        </p>
        <p className="text-gray-400">Following</p>
      </div>

      <div>
        <p className="font-bold text-gray-700 text-xl">
          {profile?.stats?.totalFollowers}
        </p>
        <p className="text-gray-400">Followers</p>
      </div>
    </div>
  );
}
