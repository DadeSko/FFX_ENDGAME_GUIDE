import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "../components/Card";
import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/monsterPage.css";


function GuidePage() {
  return (
    <div className="MonsterPage">
      <h1 id="monsterTitle">THE COMPLETE ENDGAME GUIDE</h1>
      <p>Maybe someday I'll write something here</p>
    </div>
  );
}

export default GuidePage;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}