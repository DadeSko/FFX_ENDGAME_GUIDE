import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import Navbar from "./components/Navbar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from './styles/main.css';
import Footer from "./components/Footer";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link href="https://db.onlinewebfonts.com/c/6c1017e930dd9560bb7f13751bca44ab?family=Runic+MT+Std+Condensed" rel="stylesheet"></link>
      </head>
      <body>
          <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export function links(){
  return[{rel: 'stylesheet', href: styles}, { rel: "stylesheet", href: cssBundleHref }];
}
