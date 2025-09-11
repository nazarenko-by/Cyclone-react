"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Cormorant_Garamond } from "next/font/google"
import clsx from "clsx"

import Slide from "@/components/EventsSlider/Slide"

import { useDeviceType } from "@/hooks/useDeviceType"
import { EVENTS } from "@/helpers/events"

import "@/styles/slider.scss"

const cormorant = Cormorant_Garamond({
	weight: "700",
	subsets: ["latin"],
})

const EventsSlider = () => {
	const [prevIndex, setPrevIndex] = useState(EVENTS.length)
	const [nextIndex, setNextIndex] = useState(2)
	const [activeIndex, setActiveIndex] = useState(1)

	const deviceType = useDeviceType()

	return (
		<div className="home-slider-container" key={deviceType}>
			<div className={clsx("slider-item-number text-lg unselectable", cormorant.className)}>
				{activeIndex.toString().padStart(2, 0)}
			</div>
			<Swiper
				className="home-slider"
				modules={[Navigation, Autoplay]}
				allowTouchMove={deviceType !== "desktop"}
				spaceBetween={30}
				speed={1800}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 4000,
					pauseOnMouseEnter: true,
					waitForTransition: true,
				}}
				navigation={{
					nextEl: ".slider-button-next",
					prevEl: ".slider-button-prev",
				}}
				onRealIndexChange={(swiper) => {
					const activeSlide = swiper.realIndex + 1
					setPrevIndex(activeSlide === 1 ? EVENTS.length : activeSlide - 1)
					setActiveIndex(activeSlide)
					setNextIndex(activeSlide === EVENTS.length ? 1 : activeSlide + 1)
				}}
			>
				{EVENTS.map((event) => (
					<SwiperSlide key={event.id} virtualIndex={event.id} className="home-slider-slide">
						{({ isActive, isPrev, isNext }) => <Slide {...event} isActive={isActive || isPrev || isNext} />}
					</SwiperSlide>
				))}
			</Swiper>

			<SlideButton type={"prev"} text={prevIndex.toString().padStart(2, 0)} />
			<SlideButton type={"next"} text={nextIndex.toString().padStart(2, 0)} />
			<button className="slider-read-more unselectable" title="Read more about the event">
				<svg width={"50"} height={"50"} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path d="M0 8 L2 6 L12 14 L22 6 L24 8 L12 18 Z"></path>
				</svg>
			</button>
		</div>
	)
}

const SlideButton = ({ className, text, type }) => {
	return (
		<>
			<div
				className={clsx(className, "slider-button unselectable", `slider-button-${type}`)}
				title="Change slide"
			>
				{text}
			</div>
			<div
				className={clsx(className, "slider-number unselectable", `slider-number-${type}`, cormorant.className)}
			>
				{text}
			</div>
		</>
	)
}

export default EventsSlider
