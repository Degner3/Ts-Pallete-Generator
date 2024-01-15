import { NavLink, useLocation } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useColors } from "../../store/useColors";
import { useEffect, useState } from "react";
// import { FaDoorOpen, FaDoorClosed } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [colors, setColors] = useState<string[]>([])
  const { currentColors, activeColor } = useColors();
  const location = useLocation() 
  console.log(location);
  

  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

  }

  const navArr = [
    { link: "/", page: "Random Pallette" },
    { link: "/pallete", page: "My Palettes" },
    { link: "/test", page: "TestPage" },
  ];

  useEffect(() => {
    setColors(location.pathname === "/" ? currentColors : activeColor)

  }, [location, currentColors, activeColor])
  

  return (
    <nav 
    className={style.nav}
    style={{
      borderBottom: `1px solid ${colors[0]}`,
      boxShadow: `0px 0px 8px 2px ${colors[0]}`
    }}
    >
      <div className={style.navwrapper}>
        <h2
          key={colors ? ` colored ${colors[0]}` : "not colored"}
          style={{
            background:
              colors && colors.length >= 2
                ? `-webkit-linear-gradient(0deg, ${colors[0]} 0%, ${colors[4]} 100%)`
                : "white",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}

        >
          Colorizer Pallete Genereator
        </h2>
        <div className={style.mobileMenu} onClick={toggleMenu} style={{
                  backgroundColor: "transparent",
                  color: "#ededed",
                  fontSize: "16px",
                  padding: "6px 15px",
                  border: "2px solid transparent",
                  borderImage: currentColors[0]
                    ? `linear-gradient(to right, ${currentColors[0]}, ${currentColors[4]}) 1`
                    : "#ededed",
                }}>
          {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </div>
        <ul className={isMenuOpen ? style.open : ""} 
        style={isMenuOpen ? {
          borderBottom: `1px solid ${colors[0]}`,
          boxShadow: `0px 10px 8px 0px ${colors[0]}`
      } : {}}>
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
                  borderImage: colors[0]
                    ? `linear-gradient(to right, ${colors[0]}, ${colors[4]}) 1`
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
