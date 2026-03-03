"use client"

import React from "react"
import clsx from "clsx"

import { cormorantBold, prozaLibre } from "@/shared/helpers/fonts"

const Slide = ({ title, event, eventDate, isActive, isMobile }) => {
	if (!isActive) return null

	return (
		<div className="slide-content">
			<h1
				className={clsx(
					"big-title events-slider-item-title",
					cormorantBold.className,
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
						prozaLibre.className,
						{ "text-2xl": !isMobile },
						{ "text-xl": isMobile }
					)}
				>
					<span className="italic">Exhibition</span> <span className="yellow-text">'{event}'</span>
				</h4>
				<h5
					className={clsx(
						"event-date",
						prozaLibre.className,
						{ "text-xl": !isMobile },
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
