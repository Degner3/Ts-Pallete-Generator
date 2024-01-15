import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useColors } from "../../store/useColors";
import { useState } from "react";
import { FaDoorOpen, FaDoorClosed } from "react-icons/fa6";





export default function Navbar() {
  const { currentColors } = useColors();

  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

  }

  const navArr = [
    { link: "/", page: "Random Pallette" },
    { link: "pallete", page: "My Palettes" },
    { link: "testpage", page: "TestPage" },
  ];

  // const activeStyle = ({ isActive, isPending }) => {
  //   return {
  //     backgroundColor: isActive ? "#1d4ed8" : isPending ? "yellow" : "",
  //     color: isActive ? "#ffffff" : isPending ? "#000000" : "",
  //     textDecoration: isActive ? "none" : "",
  //   };
  // };

  



  return (
    <nav className={style.nav}>
      <div className={style.navwrapper}>
        <h2
          key={currentColors ? ` colored ${currentColors[0]}` : "not colored"}
         
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
                    : "white",
                }}>
          {isMenuOpen ? <FaDoorOpen/> : <FaDoorClosed/>}
        </div>
        <ul className={isMenuOpen ? style.open : ""}>
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
