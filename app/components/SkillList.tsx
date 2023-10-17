import styles from "./MonsterList.module.css";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "./Card";
import type { LinksFunction } from "@remix-run/node";
import { getStoredMonsters, storedMonsters } from "~/data/monsters";
import { useLoaderData } from "@remix-run/react";

function SkillList() {
  return (
    <div className="MonsterList" id="ML">
      <div>
        <section className="card-container">
          <Card
            body="You'll find it under your shoes"
            title="Strenght Sphere"
            image="https://eip.gg/wp-content/uploads/2021/09/ffx-sphere-grid-guide-hd-max-stats.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="Drop"
            subtitle="Zoolab"
            btn={{
              text: "Go to guide",
              href: "#",
              type: "secondary",
              filled: true,
              icon: <PaperAirplaneIcon />,
            }}
          />
        </section>
      </div>
      <div>
        <section className="card-container">
          <Card
            body="Actually it doesn't matter"
            title="Luck Sphere"
            image="https://eip.gg/wp-content/uploads/2021/09/ffx-sphere-grid-guide-hd-max-stats.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="Whatever"
            subtitle="Zoolab"
            btn={{
              text: "Go to guide",
              href: "#",
              type: "secondary",
              filled: true,
              icon: <PaperAirplaneIcon />,
            }}
          />
        </section>
      </div>
      <div>
        <section className="card-container">
          <Card
            body="Maybe I'll tell you"
            title="Magic Sphere"
            image="https://eip.gg/wp-content/uploads/2021/09/ffx-sphere-grid-guide-hd-max-stats.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="Look on Google"
            subtitle="Zoolab"
            btn={{
              text: "Go to guide",
              href: "#",
              type: "secondary",
              filled: true,
              icon: <PaperAirplaneIcon />,
            }}
          />
        </section>
      </div>
    </div>
  );
}

export default SkillList;

export async function loader() {
  const monsters = await getStoredMonsters();
  return monsters;
}
// export function links() {
//     return [{ rel: 'stylesheet', href: styles }];
// }
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
