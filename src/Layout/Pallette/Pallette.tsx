import Button from "../../components/Button/Button"
import { useColors } from "../../store/useColors"
import style from "./Palette.module.scss"

export default function Pallette() {

  const { setActive, savedColors, deleteColor, activeColor } = useColors(); 
  
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
        <div className={style.container} style={{
          backgroundColor: "transparent",
          borderBottom: "2px solid transparent",
          borderImage: activeColor[0]
            ? `linear-gradient(to right, ${activeColor[0]}, ${activeColor[4]}) 1`
            : "white",
        }}>
          <div key={i} className={style.colors}>
            {colors.map((color, i) => (
              <div key={i} style={{ backgroundColor: color }}></div>
            ))}
          </div>
          <div className={style.buttonGroup}>
              <Button
              onClick={() => setActive(colors)}
              >
                Set active
              </Button>
              <Button onClick={() =>deleteColor(colors)}>Delete</Button>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
}
