import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import NavbarLogged from "~/components/NavbarLogged";

import { db } from "~/utils/db.server";

import { GraphQLClient, gql } from "graphql-request";
import { GetPing } from "~/blockchain/lens-api";

export const loader: LoaderFunction = async () => {
  console.log("[BFF][dashboard]");

  const user = await db.user.findMany();

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const response = await lens.request(GetPing);

  console.log(response);

  return user[0];
};

export default function Dashboard() {
  const user = useLoaderData();

  return (
    <div>
      <NavbarLogged address={user.address} />
      <div className="p-10"> Estas autenticado !!</div>
    </div>
  );
}
