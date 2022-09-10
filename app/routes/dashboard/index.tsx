import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NavbarLogged from "~/components/NavbarLogged";

import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  console.log("[BFF][dashboard]");
  const user = await db.user.findMany();

  console.log(user);

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
