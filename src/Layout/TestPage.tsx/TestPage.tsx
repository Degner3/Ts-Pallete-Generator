import React from 'react'
import style from "./TestPage.module.scss"
import { useColors } from '../../store/useColors'
import Faq from '../../components/Faq/Faq'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

export default function TestPage() {
    const {activeColor} = useColors()
  return (
    <div
    className={style.container}
    >
        <header
        className={style.hero}
        >
            <h1>
                Visualize Your <br />
                <span style={{color: activeColor[0]}}>Colors</span> & <i>Fonts</i> <br />
                On a Real Site
            </h1>
            <div
            style={{
                backgroundColor: activeColor[0]
            }}
            />
        </header>
        <section
        className={style.cards}
        >
            <h2>
                Lorem ipsum?
            </h2>
            <div
            className={style.cardsContainer}
            >
            {Array(3).fill("").map((card, index) => (
                <article
                className={style.card}
                style={{
                    backgroundColor: activeColor[0] + "20",
                }}
                key={`test-card-${index}`}
                >
                    <div
                    className={style.icon}
                    style={{
                        backgroundColor: activeColor[1],
                    }}
                    />
                    <h3>
                        lorem ipsum
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis autem nostrum rem totam aliquam doloribus veniam deserunt facere aspernatur.
                    </p>
                </article>
            ))}
            </div>
        </section>
        <section>
            <Faq />
        </section>
        <section>
            <ReviewCard />
        </section>
    </div>
  )
}
