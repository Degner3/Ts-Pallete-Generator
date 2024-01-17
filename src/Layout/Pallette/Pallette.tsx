import { toast } from "sonner";
import Button from "../../components/Button/Button"
import { useColors } from "../../store/useColors"
import style from "./Palette.module.scss"
import Clipboard from "../../assets/Clipboard.png"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Pallette() {

  const { setActive, savedColors, deleteColor, activeColor, deleteAllColors } = useColors();

  const [scrollTopButton, setScrollTopButton] = useState(false);

  const handleSetActive = (colors: string[]) => {
    setActive(colors)
    toast("Color Activated",{
      style: {
        backgroundColor: "#212121", 
        color: "white",
        borderRadius: 0,
        border: "2px solid transparent",
        borderImage: colors[0] ? `linear-gradient(to right, ${colors[0]}, ${colors[4]}) 1` : "white",
      }
    })
  }

  const handleDelete = (colors: string[]) => {
    deleteColor(colors)
    toast("Color Deleted",{
      style: {
        backgroundColor: "#212121", 
        color: "white",
        borderRadius: 0,
        border: "2px solid transparent",
        borderImage: activeColor[0] ? `linear-gradient(to right, ${activeColor[0]}, ${activeColor[4]}) 1` : "white",
      }
    })
  }

  const handleDeleteAll = () => {
    deleteAllColors();
    toast("All Colors Deleted", {
      style: {
        backgroundColor: "#212121",
        color: "white",
        borderRadius: 0,
        border: "2px solid transparent",
        borderImage: "white",
      },
    });
  };

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color)
    toast(`Copied ${color} to clipboard`,{
      style: {
        backgroundColor: "#212121", 
        color: "white",
        borderRadius: 0,
        border: "2px solid transparent",
        borderImage: activeColor[0] ? `linear-gradient(to right, ${activeColor[0]}, ${activeColor[4]}) 1` : "white",
      }
    })
  }

  const handleScroll = () => {
    // Check if the user has scrolled down a certain amount
    const isScrollingDown = window.scrollY > 1500;
    setScrollTopButton(isScrollingDown);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if(window.screenY > 1500) {
        setScrollTopButton(true)
      } else {
        setScrollTopButton(false)
      }
    })

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section className={style.content}>
      <h1
        key={activeColor ? `colored ${activeColor[0]}` : "not colored"}
        style={{
          background: activeColor[0]
            ? `-webkit-linear-gradient(0deg, ${activeColor[0]} 26.79%, ${activeColor[2]} 49.8%,${activeColor[4]} 70.09%)`
            : "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Palettes
      </h1>
      <div className={style.containerWrapper}>
        {savedColors.map((colors, i) => (
          <div className={style.palleteContainer}>
            <div
              key={i}
              className={style.colors}
              style={{
                backgroundColor: "transparent",
                borderBottom: "2px solid transparent",
                borderImage: activeColor[0]
                  ? `linear-gradient(to right, ${activeColor[0]}, ${activeColor[4]}) 1`
                  : "white",
              }}
            >
              {colors.map((color, i) => (
                <div>
                  <div key={i} style={{ backgroundColor: color }} />
                  <div className={style.copyArea}>
                    <button onClick={() => handleCopy(color)}>
                      <span>{color}</span>
                      <img src={Clipboard} alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.buttonGroup}>
              <Button onClick={() => handleSetActive(colors)}>
                {colors[0] === activeColor[0] ? "Active" : "Set active"}
              </Button>
              <Button onClick={() => handleDelete(colors)}>Delete</Button>
            </div>
          </div>
        ))}
        {savedColors.length > 0 && (
          <div className={style.deleteAllButton}>
            <Button onClick={handleDeleteAll}>Delete All</Button>
          </div>
        )}
        {!savedColors.length && (
          <div className={style.fail}>
            <p>You haven't saved any colors yet :(</p>
          </div>
        )}
      </div>
      {scrollTopButton && (
        <div className={style.scrollTopButton}>
          <Button onClick={scrollToTop}><FaArrowUp /></Button>
        </div>
      )}
    </section>
  );
}