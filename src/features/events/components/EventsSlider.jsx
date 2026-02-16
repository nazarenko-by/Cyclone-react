"use client"

import React, { useState, useRef, useEffect, useMemo, forwardRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import clsx from "clsx"

import Slide from "@/features/events/components/Slide"

import useDeviceType from "@/shared/hooks/useDeviceType"
import { EVENTS } from "@/features/events/data/events"

import { cormorantBold } from "@/shared/helpers/fonts"

import "@/styles/components/slider.scss"

const EventsSlider = () => {
	const navRefs = {
		prev: useRef(null),
		next: useRef(null),
	}

	const [activeIndex, setActiveIndex] = useState(1)
	const [prevNextIndex, setPrevNextIndex] = useState({ prev: EVENTS.length, next: 2 })

	const deviceType = useDeviceType()
	const isMobile = useMemo(() => deviceType === "mobile", [deviceType])

	useEffect(() => {
		if (!navRefs.prev.current || !navRefs.next.current) return

		const swiper = document.querySelector(".events-slider")?.swiper
		if (!swiper) return

		swiper.params.navigation.prevEl = navRefs.prev.current
		swiper.params.navigation.nextEl = navRefs.next.current
		swiper.navigation.init()
		swiper.navigation.update()
	}, [navRefs.prev.current, navRefs.next.current])

	return (
		<section className="events-slider-section">
			<div className="events-slider-container">
				<div className={clsx("events-slider-item-number text-lg unselectable", cormorantBold.className)}>
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
					centeredSlides={false}
					loop={true}
					autoplay={{
						delay: 10000,
						pauseOnMouseEnter: true,
						waitForTransition: true,
					}}
					onActiveIndexChange={(swiper) => {
						const activeSlide = Math.min(swiper.activeIndex, swiper.realIndex) + 1

						setActiveIndex(activeSlide)
						setPrevNextIndex({
							prev: activeSlide === 1 ? EVENTS.length : activeSlide - 1,
							next: activeSlide === EVENTS.length ? 1 : activeSlide + 1,
						})
					}}
				>
					{EVENTS.map((event) => (
						<SwiperSlide key={event.id} virtualIndex={event.id} className="events-slider-slide">
							{({ isActive, isPrev, isNext }) => (
								<Slide {...event} isActive={isActive || isPrev || isNext} isMobile={isMobile} />
							)}
						</SwiperSlide>
					))}
				</Swiper>
				<button className="events-slider-read-more unselectable" title="Read more about the event">
					<svg width={"50"} height={"50"} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M0 8 L2 6 L12 14 L22 6 L24 8 L12 18 Z"></path>
					</svg>
				</button>
			</div>
		</section>
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
				cormorantBold.className
			)}
		>
			{text}
		</div>
	</>
))

export default EventsSlider
