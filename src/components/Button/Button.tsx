import React from 'react'
import { useColors } from '../../store/useColors'
import style from "./Button.module.scss"

import { FC } from 'react'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button: FC<ButtonProps> = ({...props}) => {
    const { currentColors, activeColor } = useColors()
    const url = window.location.pathname
    console.log(url);
    const colors = window.location.pathname === "/" ? currentColors : activeColor
    
  return (
    <button
    className={style.button}
    style={{
        backgroundColor: "#1e1e1e", 
        color: "white",
        // fontSize: "20px",
        // padding: "10px 30px",
        border: "2px solid transparent",
        borderImage: colors[0] ? `linear-gradient(to right, ${colors[0]}, ${colors[4]}) 1` : "white",
    }}
    {...props}
    />
  )
}

export default Button