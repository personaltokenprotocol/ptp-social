import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import style from "./tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Personal token protocol",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://lens.xyz/widget-styles.css" />
        <script async src="https://lens.xyz/widget.js"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
