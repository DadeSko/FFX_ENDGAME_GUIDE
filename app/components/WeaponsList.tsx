import styles from "./MonsterList.module.css";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Badge from "~/components/Badge";
import { Card } from "./Card";
import type { LinksFunction } from "@remix-run/node";
import { getStoredMonsters, storedMonsters } from "~/data/monsters";
import { useLoaderData } from "@remix-run/react";

function WeaponsList() {
  return (
    <div className="MonsterList" id="ML">
      <div>
        <section className="card-container">
          <Card
            body="Just look up"
            title="Ultima Weapon"
            image="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1508881719/project-covers/000/363/536/363536-original.png?1508881719"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="See description"
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
            body="Guide goes here"
            title="Nirvana"
            image="https://static.myfigurecollection.net/upload/items/1/20303-0c351.jpg"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="See description"
            subtitle="Actually I don't remember"
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
            title="Masamune"
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38617c60-b78d-4dde-ae85-7b72500ee4fe/d6m7a77-6a49d543-344d-47b1-b5a2-fc589259a22e.png/v1/fill/w_1024,h_576/auron_s_masamune_by_sonduart_d6m7a77-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMzg2MTdjNjAtYjc4ZC00ZGRlLWFlODUtN2I3MjUwMGVlNGZlXC9kNm03YTc3LTZhNDlkNTQzLTM0NGQtNDdiMS1iNWEyLWZjNTg5MjU5YTIyZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.11mIxwI74eozAoAs7WYAuYNqw82hPwEoV7GTaDNW5kQ"
            badge={{
              text: "Top",
              filled: true,
            }}
            indicator="See description"
            subtitle="Mihen road"
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

export default WeaponsList;

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
