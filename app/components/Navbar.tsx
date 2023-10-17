import { NavLink } from "@remix-run/react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header>
      <nav id="main-navigation">
        <ul>
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/completeGuide">Guide</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/armorAndWeapons">Armors/Weapons</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/materials">Materials</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/monsters">Monsters</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
