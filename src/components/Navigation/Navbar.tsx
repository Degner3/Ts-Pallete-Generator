import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useColors } from "../../store/useColors";


export default function Navbar() {
  const { currentColors } = useColors();

  const navArr = [
    { link: "/", page: "Random Pallette" },
    { link: "pallete", page: "My Palettes" },
  ];

  



  return (
    <nav className={style.nav}>
      <div className={style.navwrapper}>
        <h2
          key={currentColors ? ` colored ${currentColors[0]}` : "not colored"}
          style={{
            background:
              currentColors && currentColors.length >= 2
                ? `-webkit-linear-gradient(0deg, ${currentColors[0]} 0%, ${currentColors[4]} 100%)`
                : "white",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Colorizer Pallete Genereator
        </h2>
        <ul>
          {navArr.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.link}
                style={{
                  backgroundColor: "transparent",
                  color: "#ededed",
                  fontSize: "16px",
                  padding: "6px 15px",
                  border: "2px solid transparent",
                  borderImage: currentColors[0]
                    ? `linear-gradient(to right, ${currentColors[0]}, ${currentColors[4]}) 1`
                    : "white",
                }}
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
