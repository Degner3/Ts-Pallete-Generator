import React from 'react'
import style from "./ReviewCard.module.scss"
import { useColors } from '../../store/useColors'
import { FaStar } from 'react-icons/fa'

export default function ReviewCard() {
    const {activeColor} = useColors()
  return (
    <article
    style={{
        backgroundColor: activeColor[0] + "20"
    }}
    className={style.card}
    >
        <div
        className={style.top}
        >
            <div
            className={style.icon}
            style={{
                backgroundColor: activeColor[1]
            }}
            />
            <div>
                <h3
                >
                    Cool User
                </h3>
                <p
                style={{
                    opacity: "60%"
                }}
                >
                    Product Tester
                </p>
            </div>
        </div>
        <div
        className={style.rating}
        style={{
            color: activeColor[2]
        }}
        >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div
        className={style.review}
        >
            <p>
                "Amazing. I found my favorite colors in literally... 2 minutes? Woah! Totally real review."  
            </p>
        </div>
    </article>
  )
}
