import { useEffect } from 'react'
import style from "./Homepage.module.scss"
import { useColors } from '../../store/useColors'
import rgbHex from 'rgb-hex'
import Button from '../../components/Button/Button'
import { toast } from 'sonner'
import Clipboard from "../../assets/Clipboard.png"

// Page: HomePage
export default function Homepage() {
    // Destructuring values from the useColors hook
    const {setColor, currentColors, saveColor, savedColors} = useColors()

    // Function to fetch colors from API
    const fetchData = async () => {
      const url = 'http://colormind.io/api/'

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({"model":"default"})
      })

      let { result: data } = await res.json()
      // Convert RGB colors to hex format
      const hexColors = data.map((color: number[]) => "#" + rgbHex(color[0], color[1], color[2]))
      // Set fetched colors using setColor hook
      setColor(hexColors)
    }

    // Effect hook to fetch colors when the component mounts
    useEffect(() => {
      // Check if there are already colors set, if yes, do not fetch
      if(currentColors[0]) return

      fetchData()
    }, [])

    // Function to handle fetching new colors
    const handleFetch = () => {
      fetchData()
    }

    // Function to handle saving current colors
    const handleSave = () => {
      saveColor()
      // Display notification
      toast("Saved color",{
        style: {
          backgroundColor: "#212121", 
          color: "white",
          borderRadius: 0,
          border: "2px solid transparent",
          borderImage: currentColors[0] ? `linear-gradient(to right, ${currentColors[0]}, ${currentColors[4]}) 1` : "white",
        }
      })
    }

    // Function to copy a color to the clipboard
    const handleCopy = (color: string) => {
      navigator.clipboard.writeText(color)
      // Display notification
      toast(`Copied ${color} to clipboard`,{
        style: {
          backgroundColor: "#212121", 
          color: "white",
          borderRadius: 0,
          border: "2px solid transparent",
          borderImage: currentColors[0] ? `linear-gradient(to right, ${currentColors[0]}, ${currentColors[4]}) 1` : "white",
        }
      })
    }
    

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
            <div>
              <div
              key={color + index}
              style={{
                backgroundColor: color,
              }}
              />
              <div
                className={style.copyArea}
                >
                <button
                onClick={() => handleCopy(color)}
                >
                  <span>
                    {color}
                  </span>
                  <img 
                  src={Clipboard} 
                  alt="" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
        className={style.buttonGroup}
        >
          <Button
          onClick={handleFetch}
          >
            Generate
          </Button>
          <Button
          onClick={handleSave}
          >
            Save
          </Button>
        </div>
    </div>
  )
}