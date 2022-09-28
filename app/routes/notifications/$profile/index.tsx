import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

import { fetchNotifications } from "~/blockchain/enps";

// import MessageIn from "~/components/Social/MessageIn";
import MessageOut from "~/components/Social/MessageOut";
import { GraphQLClient } from "graphql-request";
import { GetProfile } from "~/blockchain/lens-api";

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

  console.log(`[BFF][notifications] Loading profile ${params.profile} ...`);

  const lens = new GraphQLClient("https://api.lens.dev/playground");

  const variables = {
    request: { handle: params.profile },
  };

  const response = await lens.request(GetProfile, variables);

  const profile = response.profile;

  // console.log(`[BFF][notifications] notifications:`);
  // console.log(notifications);

  // return notifications;

  // filter notifications sent by profile
  const filterNotifications = notifications.filter(
    (notification: any) =>
      notification.title.toLowerCase() == profile.ownedBy.toLowerCase()
  );

  return { notifications, filterNotifications };
};

export default function Messages() {
  const { notifications, filterNotifications } = useLoaderData();

  // console.log(notifications);
  // console.log(filterNotifications);

  return (
    <div>
      {/* <MessageIn message="Hello 🌎" /> */}
      {filterNotifications.map((message: any) => (
        <MessageOut key={message.sid} message={message.notification.body} />
      ))}
    </div>
  );
}
