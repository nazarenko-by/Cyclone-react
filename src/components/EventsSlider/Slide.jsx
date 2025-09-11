"use client"

import React from "react"
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

const Slide = ({ title, event, eventDate, isActive }) => {
	if (!isActive) return null

	return (
		<div className="slide-content">
			<h1 className={clsx("big-title slider-item-title text-5xl", cormorant.className)}>{title}</h1>
			<div className="events">
				<h4 className="event-name">
					<span className="italic">Exhibition</span> <span className="yellow-text">'{event}'</span>
				</h4>
				<h5 className={clsx("event-date", prozaLibre.className)}>{eventDate || "Date to be announced"}</h5>
			</div>
		</div>
	)
}

export default Slide
