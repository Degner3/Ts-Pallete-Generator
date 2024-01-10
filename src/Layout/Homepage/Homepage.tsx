import { useEffect } from 'react'
import style from "./Homepage.module.scss"
import { useColors } from '../../store/useColors'
import Button from '../../components/Button'

export default function Homepage() {
    const {setColor, currentColors} = useColors()

    const fetchData = async () => {
      const url = 'http://colormind.io/api/'

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({"model":"default"})
      })

      let { result: data } = await res.json()
      setColor(data)
    }
    
    useEffect(() => {
      fetchData()
    }, [])
    

  return (
    <div
    className={style.content}
    >
        <h1
        key={currentColors ? `colored ${currentColors[0]}`: "not colored"}
        style={{
            background: currentColors[0] ? `-webkit-linear-gradient(0deg, ${currentColors[0]} 26.79%, ${currentColors[2]} 49.8%,${currentColors[4]} 70.09%)` : "white",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }}
        >
            Your new colors
        </h1>
        <div
        className={style.colors}
        >
          {currentColors && currentColors.map((color, index) => (
            <div
            key={color + index}
            style={{
              backgroundColor: color,
            }}
            >
              
            </div>
          ))}
        </div>
        <div
        className={style.buttonGroup}
        >
          <Button>
            Generate
          </Button>
          <Button>
            Save
          </Button>
        </div>
    </div>
  )
}