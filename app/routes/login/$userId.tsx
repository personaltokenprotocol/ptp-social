/* eslint-disable react-hooks/rules-of-hooks */
import { db } from "~/utils/db.server";

import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { User } from "@prisma/client";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.userId) {
    throw new Error("expected params.userId to exist");
  }

  const user = await db.user.findUnique({
    where: {
      address: params.userId,
    },
  });

  if (!user) return null;

  return user;
};

export default function userPage() {
  const user = useLoaderData<User>();

  return (
    <div className="p-10">
      <h1 className="font-bold ">Profile</h1>
      <p>Address: {user.address}</p>
    </div>
  );
}
