import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Links, Meta, Scripts, useLoaderData } from "@remix-run/react";

import NavbarLogged from "~/components/NavbarLogged";

import { db } from "~/utils/db.server";

import { GraphQLClient } from "graphql-request";
import { ExplorePublications } from "~/blockchain/lens-api";

import Post from "~/components/Social/Post";
import { defaultWallet } from "~/blockchain/constast";

export const action: ActionFunction = async ({ request }) => {
  console.log("[BFF][dashboard][logout] se ejecuta el action !!!");
  const form = await request.formData();

  const address = form.get("address");
  const connected = form.get("connected");

  console.log(
    `[BFF][dashboard][logout] address: ${address}, connected: ${connected}`
  );

  if (!address || typeof address !== "string") return null;
  if (!connected || typeof connected !== "string") return null;

  await db.user.updateMany({
    where: {
      address,
    },
    data: {
      connected: connected === "true",
    },
  });

  return redirect(`/login`);
};

export const loader: LoaderFunction = async () => {
  console.log("[BFF][dashboard] Loading feed");

  const user = await db.user.findMany({
    where: {
      connected: true,
    },
  });

  if (user.length === 0) {
    throw new Error("No user connected");
  }

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const response = await lens.request(ExplorePublications);

  const items = response.explorePublications;

  return { ...user[0], ...items };
};

export default function Dashboard() {
  const data = useLoaderData();

  return (
    <div>
      <NavbarLogged address={data.address} />

      <h1 className="px-10 pt-5 font-bold text-first text-2xl text-center">
        What's going on ?
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:w-2/3 content-center m-auto">
        {data.items.map((item: any) => (
          <Post
            key={item.id}
            id={item.id}
            name={item.profile.name}
            handle={item.profile.handle}
            profileImage={item.profile.picture?.original?.url}
            content={item.metadata.content}
            image={item.metadata.media[0]?.original?.url}
            collection={item.stats.totalAmountOfCollects}
            comments={item.stats.totalAmountOfComments}
            mirrors={item.stats.totalAmountOfMirrors}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NavbarLogged address={defaultWallet.address} />

        <p className="p-10 text-2xl text-third">{error.message}</p>
        <Scripts />
      </body>
    </html>
  );
}
