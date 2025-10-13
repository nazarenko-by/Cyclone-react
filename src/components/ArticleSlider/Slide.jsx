"use client"

import React from "react"
import Image from "next/image"
import { Cormorant_Garamond, Proza_Libre } from "next/font/google"
import clsx from "clsx"

const cormorant = Cormorant_Garamond({
	weight: ["500", "700"],
	subsets: ["latin"],
	style: ["italic", "normal"],
})
const prozaLibre = Proza_Libre({
	weight: ["400"],
	subsets: ["latin"],
})

const Slide = ({ topic, isActive }) => {
	if (!isActive) return null

	return (
		<div className="article-slide-content">
			{/* <img src={topic.image} alt={topic.title} className="slide-image unselectable" /> */}
			<Image
				src={`/images/topics/${topic.image}`}
				alt={topic.title}
				className="article-slide-image unselectable"
				width={100}
				height={100}
			/>
			<h1 className={clsx("big-title article-slide-item-title text-xl", cormorant.className)}>{topic.title}</h1>
			<div className="events">
				<h5 className={clsx("event-date", prozaLibre.className)}>{topic.date || "Date to be announced"}</h5>
			</div>
		</div>
	)
}

export default Slide
