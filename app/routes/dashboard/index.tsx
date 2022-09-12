import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import NavbarLogged from "~/components/NavbarLogged";

import { db } from "~/utils/db.server";

import { GraphQLClient } from "graphql-request";
import { ExplorePublications } from "~/blockchain/lens-api";
import Post from "~/components/Social/Post";

export const loader: LoaderFunction = async () => {
  console.log("[BFF][dashboard]");

  const user = await db.user.findMany();

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const response = await lens.request(ExplorePublications);

  const items = response.explorePublications;

  return { ...user[0], ...items };
};

export default function Dashboard() {
  const data = useLoaderData();

  // console.log(data.items);

  data.items.map((item: any) => {
    console.log(item.profile.picture.original?.url);
  });

  return (
    <div>
      <NavbarLogged address={data.address} />

      <h1 className="px-10 pt-10">Trending ...</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="grid ">
          {data.items.map((item: any) => (
            <Post
              key={item.id}
              id={item.id}
              name={item.profile.name}
              handle={item.profile.handle}
              profileImage={item.profile.picture.original?.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
