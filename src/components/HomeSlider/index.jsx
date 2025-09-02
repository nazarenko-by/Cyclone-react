"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Virtual } from "swiper/modules"
import clsx from "clsx"

import { EVENTS } from "@/helpers/events"

import "@/styles/slider.scss"

const HomeSlider = () => {
	const [prevIndex, setPrevIndex] = useState(EVENTS.length)
	const [nextIndex, setNextIndex] = useState(2)

	return (
		<div className="home-slider-container">
			<div className="slider-number-prev unselectable">{prevIndex}</div>
			<SlideButton className={"slide-button-prev"} text={prevIndex} />

			<Swiper
				className="home-slider"
				modules={[Navigation, Autoplay, Virtual]}
				spaceBetween={30}
				speed={1800}
				centeredSlides={true}
				loop={true}
				// autoplay={{
				//     delay: 4000,
				//     pauseOnMouseEnter: true,
				//     waitForTransition: true,
				//     stopOnLastSlide: true
				// }}
				navigation={{
					nextEl: ".slide-button-next",
					prevEl: ".slide-button-prev",
				}}
				onRealIndexChange={(swiper) => {
					const activeSlide = swiper.realIndex + 1
					setPrevIndex(activeSlide === 1 ? EVENTS.length : activeSlide - 1)
					setNextIndex(activeSlide === EVENTS.length ? 1 : activeSlide + 1)
				}}
				virtual={true}
			>
				{EVENTS.map((event) => (
					<SwiperSlide key={event.id}>
						<div className="slide-content">
							<h2 className="slide-title">{event.title}</h2>
							<p className="slide-event">{event.event}</p>
							{event.eventDate && <p className="slide-event-date">{event.eventDate}</p>}
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<SlideButton className={"slide-button-next"} text={nextIndex} />
			<div className="slider-number-next unselectable">{nextIndex}</div>
		</div>
	)
}

const SlideButton = ({ className, text }) => {
	return (
		<div className={clsx(className, "slide-button", "unselectable")} /*onClick={onClick}*/>
			{text.toString().padStart(2, 0)}
		</div>
	)
}

export default HomeSlider
