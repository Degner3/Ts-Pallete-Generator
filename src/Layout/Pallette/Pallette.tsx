import Button from "../../components/Button/Button"
import { useColors } from "../../store/useColors"
import style from "./Palette.module.scss"

export default function Pallette() {

  const { setColor, savedColors, deleteColor, currentColors } = useColors();

  const handleDelete = (colors) => {
    deleteColor(colors);
  }  


  
  return (
    <section className={style.content}>
      <h1
        key={currentColors ? `colored ${currentColors[0]}` : "not colored"}
        style={{
          background: currentColors[0]
            ? `-webkit-linear-gradient(0deg, ${currentColors[0]} 26.79%, ${currentColors[2]} 49.8%,${currentColors[4]} 70.09%)`
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
          borderImage: currentColors[0]
            ? `linear-gradient(to right, ${currentColors[0]}, ${currentColors[4]}) 1`
            : "white",
        }}>
          <div key={i} className={style.colors}>
            {colors.map((color, i) => (
              <div key={i} style={{ backgroundColor: color }}></div>
            ))}
          </div>
          <div className={style.buttonGroup}>
              <Button>Set active</Button>
              <Button onClick={() => handleDelete(colors)}>Delete</Button>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
}
