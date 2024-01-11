import React from 'react'
import style from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer
    className={style.footer}
    >
        <p>
            Colorizer Pallette Generator - Created by Mike Montgomery
        </p>
        <span>
            Made possible by colormind.io pallette API
        </span>
    </footer>
  )
}
