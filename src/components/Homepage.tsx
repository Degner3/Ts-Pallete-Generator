import axios from 'axios'
import React, { useEffect, useState } from 'react'
import rgbHex from 'rgb-hex'

export default function Homepage() {
    const [colors, setColors] = useState<string[]>([])

    const fetchData = async () => {
      const url = 'http://colormind.io/api/'

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({"model":"default"})
      })

      let { result: data } = await res.json()
      data = data.map((color: number[]) => "#" + rgbHex(color[0], color[1], color[2]))
      console.log(data);
      setColors(data)
    }
    
    useEffect(() => {
      fetchData()
    }, [])
    

  return (
    <div>
        <h1>
            Your new colors
        </h1>
        <div>
          {colors && colors.map((color, index) => (
            <div
            key={color + index}
            style={{
              backgroundColor: color,
              height: 20,
              width: 20
            }}
            >
              
            </div>
          ))}
        </div>
    </div>
  )
}
