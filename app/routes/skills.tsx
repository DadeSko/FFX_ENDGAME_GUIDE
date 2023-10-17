import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "../components/Card";
import type { LinksFunction } from "@remix-run/node";
import MonsterList from "~/components/MonsterList";
import styles from "~/styles/monsterPage.css";
import SkillList from "~/components/SkillList";

function SkillPage() {
  return (
    <div className="MonsterPage">
      <h1 id="monsterTitle">SKILLS</h1>
      <SkillList />
    </div>
  );
}

export default SkillPage;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
  