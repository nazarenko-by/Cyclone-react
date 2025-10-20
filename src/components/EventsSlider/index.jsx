"use client"

import React, { useState, useRef, forwardRef } from "react"
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
	const navRefs = {
		prev: useRef(null),
		next: useRef(null),
	}

	const [activeIndex, setActiveIndex] = useState(1)
	const [prevNextIndex, setPrevNextIndex] = useState({ prev: EVENTS.length, next: 2 })

	const deviceType = useDeviceType()

	return (
		<div className="events-slider-container" key={deviceType}>
			<div className={clsx("events-slider-item-number text-lg unselectable", cormorant.className)}>
				{activeIndex.toString().padStart(2, 0)}
			</div>
			{["prev", "next"].map((type) => (
				<SlideButton
					ref={navRefs[type]}
					key={type}
					type={type}
					text={prevNextIndex[type].toString().padStart(2, 0)}
				/>
			))}

			<Swiper
				className="events-slider"
				modules={[Navigation, Autoplay]}
				slidesPerView={1}
				allowTouchMove={deviceType !== "desktop"}
				spaceBetween={30}
				speed={1500}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 10000,
					pauseOnMouseEnter: true,
					waitForTransition: true,
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = navRefs.prev.current
					swiper.params.navigation.nextEl = navRefs.next.current
				}}
				onRealIndexChange={(swiper) => {
					const activeSlide = swiper.realIndex + 1
					setActiveIndex(activeSlide)
					setPrevNextIndex({
						prev: activeSlide === 1 ? EVENTS.length : activeSlide - 1,
						next: activeSlide === EVENTS.length ? 1 : activeSlide + 1,
					})
				}}
			>
				{EVENTS.map((event) => (
					<SwiperSlide key={event.id} virtualIndex={event.id} className="events-slider-slide">
						{({ isActive, isPrev, isNext }) => <Slide {...event} isActive={isActive || isPrev || isNext} />}
					</SwiperSlide>
				))}
			</Swiper>

			{/* <SlideButton type={"prev"} text={prevIndex.toString().padStart(2, 0)} />
			<SlideButton type={"next"} text={nextIndex.toString().padStart(2, 0)} /> */}
			<button className="events-slider-read-more unselectable" title="Read more about the event">
				<svg width={"50"} height={"50"} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path d="M0 8 L2 6 L12 14 L22 6 L24 8 L12 18 Z"></path>
				</svg>
			</button>
		</div>
	)
}

const SlideButton = forwardRef(({ className, text, type }, ref) => (
	<>
		<div
			ref={ref}
			className={clsx(className, "events-slider-button unselectable", `events-slider-button-${type}`)}
			title="Change slide"
		>
			{text}
		</div>
		<div
			className={clsx(
				className,
				"events-slider-number unselectable",
				`events-slider-number-${type}`,
				cormorant.className
			)}
		>
			{text}
		</div>
	</>
))

export default EventsSlider
