import React from 'react'
import Accordion from '../Accordion/Accordion'
import styles from "./Faq.module.scss"

export default function Faq() {
  return (
    <section
    className={styles.faq}
    >
        <h2>
          FAQ
        </h2>
        {Array(3).fill("").map(item => (
            <Accordion />
        ))}
    </section>
  )
}
