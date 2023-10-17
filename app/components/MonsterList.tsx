import styles from "./MonsterList.module.css";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "../components/Card";
import type { LinksFunction } from "@remix-run/node";
import { getStoredMonsters, storedMonsters } from "~/data/monsters";
import { useLoaderData } from "@remix-run/react";

function MonsterList() {
  return (
    <div className="MonsterList" id="ML">
      <div>
        <section className="card-container">
          <Card
            body="Hit him very hard"
            title="Morlboro"
            image="https://www.gamerguides.com/assets/media/17/44/FFX_Malboro.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="Fortunosfera x 4"
            subtitle="Calm Lands"
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
            body="Hit him very hard"
            title="Morlboro"
            image="https://www.gamerguides.com/assets/media/17/44/FFX_Malboro.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="Fortunosfera x 4"
            subtitle="Calm Lands"
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
            body="Hit him very hard"
            title="Morlboro"
            image="https://www.gamerguides.com/assets/media/17/44/FFX_Malboro.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="Fortunosfera x 4"
            subtitle="Calm Lands"
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

export default MonsterList;

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
