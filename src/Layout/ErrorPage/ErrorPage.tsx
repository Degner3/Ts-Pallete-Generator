import { Link } from "react-router-dom";
import { useColors } from "../../store/useColors"
import style from "./ErrorPage.module.scss"
import errorpage from "../../assets/error.gif"


export const ErrorPage = () => {
  const { activeColor } = useColors();

  return (
    <section className={style.errpage}>
      <article className={style.errorwrapper} style={{
        backgroundImage: "url(" + errorpage + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%"
      }}>
        <h2
        style={{
          background: activeColor[0]
            ? `-webkit-linear-gradient(0deg, ${activeColor[0]} 26.79%, ${activeColor[2]} 49.8%,${activeColor[4]} 70.09%)`
            : "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>404</h2>
        <h3
        style={{
          background: activeColor[0]
            ? `-webkit-linear-gradient(0deg, ${activeColor[0]} 26.79%, ${activeColor[2]} 49.8%,${activeColor[4]} 70.09%)`
            : "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Look like you're lost</h3>
        <p
        style={{
          background: activeColor[0]
            ? `-webkit-linear-gradient(0deg, ${activeColor[0]} 26.79%, ${activeColor[2]} 49.8%,${activeColor[4]} 70.09%)`
            : "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>the page you are looking for not avaible!</p>
        <div
         key={activeColor ? `colored ${activeColor[0]}` : "not colored"}
         className={style.btnHome}>
            <Link to="/"
            style={{
                border: "2px solid black",
                backgroundColor: "transparent",
                color: "#ededed",
                fontSize: "16px",
                padding: "6px 15px",
            }}>Go to Home</Link>
        </div>
        
      </article>
    </section>
  );
};
