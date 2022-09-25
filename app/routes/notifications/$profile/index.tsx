import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

import { fetchNotifications } from "~/blockchain/enps";

// import MessageIn from "~/components/Social/MessageIn";
import MessageOut from "~/components/Social/MessageOut";

import { deletePTP } from "~/utils/text";

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findMany({
    where: {
      connected: true,
    },
  });

  if (user.length === 0) {
    throw new Error("No user connected");
  }

  console.log(
    `[BFF][$profile][Outlet] Fetching notifications for ${user[0].address}...`
  );

  const notifications = await fetchNotifications(user[0].address);

  // filter notifications sent by profile
  const filterNotifications = notifications.filter(
    (notification: any) =>
      notification.title.toLowerCase() ==
      "0x3aeC2276326CDC8E9a8A4351c338166e67105AC3".toLowerCase()
  );

  return filterNotifications;
};

export default function Messages() {
  const notifications = useLoaderData();

  // console.log(notifications);

  return (
    <div>
      {/* <MessageIn message="Hello 🌎" /> */}
      {notifications.map((message: any) => (
        <MessageOut key={message.sid} message={message.notification.body} />
      ))}
    </div>
  );
}
