import { HomeCard } from "~/components/HomeCard";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import logo from "../img/FFXWBSITELOGO.png";
import "../styles/main.css";

export default function Index() {
  return (
    <div className="card-container">
      <HomeCard
        body="I wrote this guide to help all the players that need an immediate reference to FFX endgame grind. 
          This guide is not intended as a complete game guide, but as a fast and effective companion for players that are min/maxing their run to take the hardest challenges the game has to offer!"
        title="Welcome to your ultimate End Game reference!"
        image={logo}
        subtitle=""
        btn={{
          text: "GO TO THE GUIDE",
          href: "/completeGuide",
          type: "secondary",
          filled: false,
          icon: <PaperAirplaneIcon />,
        }}
      />
    </div>
  );
}
