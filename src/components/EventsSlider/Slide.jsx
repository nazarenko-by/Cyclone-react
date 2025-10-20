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

const Slide = ({ title, event, eventDate, isActive, isMobile }) => {
	if (!isActive) return null

	return (
		<div className="slide-content">
			<h1
				className={clsx(
					"big-title events-slider-item-title",
					cormorant.className,
					{ "text-5xl": !isMobile },
					{ "text-3xl": isMobile }
				)}
			>
				{title}
			</h1>
			<div className="events">
				<h4
					className={clsx(
						"event-name",
						{ "text-3xl": !isMobile },
						{ "text-xl": isMobile },
						prozaLibre.className
					)}
				>
					<span className="italic">Exhibition</span> <span className="yellow-text">'{event}'</span>
				</h4>
				<h5
					className={clsx(
						"event-date",
						prozaLibre.className,
						{ "text-2xl": !isMobile },
						{ "text-md": isMobile }
					)}
				>
					{eventDate || "Date to be announced"}
				</h5>
			</div>
		</div>
	)
}

export default Slide
