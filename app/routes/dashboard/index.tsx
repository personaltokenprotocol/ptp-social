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

  data.items.map((item: any) => {
    console.log(item.metadata.media);
  });

  return (
    <div>
      <NavbarLogged address={data.address} />

      <h1 className="px-10 pt-5 font-bold text-first text-2xl text-center">
        What's going on ?
      </h1>

      <div className="grid grid-cols-2 gap-2 w-2/3 m-auto">
        {data.items.map((item: any) => (
          <Post
            key={item.id}
            id={item.id}
            name={item.profile.name}
            handle={item.profile.handle}
            profileImage={item.profile.picture.original?.url}
            description={item.metadata.description}
            image={item.metadata.media[0]?.original?.url}
          />
        ))}
      </div>
    </div>
  );
}
