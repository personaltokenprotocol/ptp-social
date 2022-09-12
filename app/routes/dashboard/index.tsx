import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import NavbarLogged from "~/components/NavbarLogged";

import { db } from "~/utils/db.server";

import { GraphQLClient } from "graphql-request";
import { ExplorePublications, GetPing } from "~/blockchain/lens-api";

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

  console.log(data);
  return (
    <div>
      <NavbarLogged address={data.address} />

      <div className="p-10">
        <h1>Publicaciones</h1>
        <ul>
          {data.items.map((item: any) => (
            <li key={item.id}>{item.profile.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
