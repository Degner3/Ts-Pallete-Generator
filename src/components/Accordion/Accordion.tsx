import React, { useState } from 'react'
import style from "./Accordion.module.scss"
import { useColors } from '../../store/useColors'
import { FaPlus } from "react-icons/fa";


export default function Accordion() {
    const {currentColors} = useColors()
    const [open, setOpen] = useState(false)

  return (
    <div
    className={style.accordion}
    style={{
        backgroundColor: currentColors[0] + "20"
    }}
    >
        <div
        className={style.top}
        onClick={() => setOpen(!open)}
        style={{
            borderBottom: open ? `1px solid ${currentColors[0]}60` : ""
        }}
        >
            <h3>Lorem ipsum</h3>
            <FaPlus 
            style={{
                color: currentColors[1]
            }}
            />
        </div>
       {open && <div
        className={style.bottom}
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus id quas repellat modi quia optio? Atque quaerat expedita tenetur iure, ipsam eius explicabo sunt eveniet. Sequi consequatur architecto necessitatibus.
            </p>
        </div>}
    </div>
  )
}
