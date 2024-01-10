import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export default function Navbar() {
  const navArr = [
    { link: "/", page: "Random Pallette" },
    { link: "pallete", page: "My Palettes" },
  ];

  return (
    <nav className={style.nav}>
      <div className={style.navwrapper}>
        <h2>Colorizer Pallete Genereator</h2>
        <ul>
          {navArr.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.link}
                // activeClassName={style.active}
              >
                {item.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
