import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "../components/Card";
import type { LinksFunction } from "@remix-run/node";
import WeaponsList from "~/components/WeaponsList";
import styles from "~/styles/monsterPage.css";

function WeaponsPage() {
  return (
    <div className="MonsterPage">
      <h1 id="monsterTitle">WEAPONS AND ARMORS</h1>
      <WeaponsList />
    </div>
  );
}

export default WeaponsPage;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
  