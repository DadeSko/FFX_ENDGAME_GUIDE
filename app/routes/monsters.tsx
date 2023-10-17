import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "../components/Card";
import type { LinksFunction } from "@remix-run/node";
import MonsterList from "~/components/MonsterList";
import styles from "~/styles/monsterPage.css";

function MonsterPage() {
  return (
    <div className="MonsterPage">
      <h1 id="monsterTitle">MONSTERS</h1>
      <MonsterList />
    </div>
  );
}

export default MonsterPage;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
//export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
