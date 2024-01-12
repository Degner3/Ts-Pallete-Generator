import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useColors } from '../store/useColors';
import { useLocation } from 'react-router-dom';

export function CustomToast({title}: {title: string}) {
const [colors, setColors] = useState<string[]>([])
  const { currentColors, activeColor } = useColors();
  const location = useLocation() 
  console.log(location);

  useEffect(() => {
    setColors(location.pathname === "/" ? currentColors : activeColor)

  }, [location, currentColors, activeColor])

  return(
    <div
    style={{
        backgroundColor: "transparent", 
        color: "white",
        fontSize: "20px",
        padding: "10px 30px",
        border: "2px solid transparent",
        borderImage: colors[0] ? `linear-gradient(to right, ${colors[0]}, ${colors[4]}) 1` : "white",
    }}
    >
      <h3>
          {title}
      </h3>
    </div>
  )
}
