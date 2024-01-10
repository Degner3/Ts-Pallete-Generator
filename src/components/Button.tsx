import React from 'react'
import { useColors } from '../store/useColors'
import style from "./Button.module.scss"

import { FC } from 'react'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button: FC<ButtonProps> = ({...props}) => {
    const { currentColors } = useColors()
  return (
    <button
    className={style.button}
    style={{
        backgroundColor: "transparent", 
        color: "white",
        fontSize: "20px",
        padding: "10px 30px",
        border: "3px solid transparent",
        borderImage: currentColors[0] ? `linear-gradient(to right, ${currentColors[0]}, ${currentColors[4]}) 1` : "white",
    }}
    {...props}
    />
  )
}

export default Button