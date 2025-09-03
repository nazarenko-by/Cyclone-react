"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Virtual } from "swiper/modules"
import clsx from "clsx"
import { Cormorant_Garamond } from "next/font/google"

import { EVENTS } from "@/helpers/events"

import "@/styles/slider.scss"

const cormorant = Cormorant_Garamond({
	weight: "700",
	subsets: ["latin"],
})

const HomeSlider = () => {
	const [prevIndex, setPrevIndex] = useState(EVENTS.length)
	const [nextIndex, setNextIndex] = useState(2)

	return (
		<div className="home-slider-container">
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
					nextEl: ".slider-button-next",
					prevEl: ".slider-button-prev",
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

			<SlideButton type={"prev"} text={prevIndex.toString().padStart(2, 0)} />
			<SlideButton type={"next"} text={nextIndex.toString().padStart(2, 0)} />
		</div>
	)
}

const SlideButton = ({ className, text, type }) => {
	return (
		<>
			<div className={clsx(className, "slider-button unselectable", `slider-button-${type}`)}>{text}</div>
			<div
				className={clsx(className, "slider-number unselectable", `slider-number-${type}`, cormorant.className)}
			>
				{text}
			</div>
		</>
	)
}

export default HomeSlider
