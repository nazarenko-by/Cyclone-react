"use client"

import React, { useEffect, useState, useRef, forwardRef } from "react"
import { useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Cormorant_Garamond } from "next/font/google"

import { useDeviceType } from "@/hooks/useDeviceType"

import Slide from "@/components/ArticleSlider/Slide"
import clsx from "clsx"
import Link from "next/link"

const cormorant = Cormorant_Garamond({
	weight: "700",
	style: ["italic"],
	subsets: ["latin"],
})

const ArticleSlider = () => {
	const navRefs = {
		prev: useRef(null),
		next: useRef(null),
	}

	const deviceType = useDeviceType()
	const preloader = useSelector((state) => state.base.preloader)
	const topics = useSelector((state) => state.base.topics)

	const [prevNextTopicsIndex, setPrevNextTopics] = useState({ prev: 0, next: 0 })

	useEffect(() => {
		if (topics.length === 0) return
		setPrevNextTopics({
			prev: topics.length - 1,
			next: 2,
		})
	}, [topics])

	if (preloader) return <div>Loader</div>
	console.log(topics)

	return (
		<div key={deviceType} className="article-slider-container">
			{["prev", "next"].map((type) => (
				<SlideButton
					key={type}
					ref={navRefs[type]}
					type={type}
					topic={topics[prevNextTopicsIndex[type]]}
					number={prevNextTopicsIndex[type] + 1 > topics.length ? 1 : prevNextTopicsIndex[type] + 1}
				/>
			))}
			<Swiper
				className="article-slides"
				modules={[Navigation, Autoplay]}
				// modules={[Navigation]}
				slidesPerView={2}
				loop={true}
				simulateTouch={deviceType !== "desktop"}
				speed={1500}
				centeredSlides={false}
				breakpoints={{ 768: { slidesPerView: 2 }, 480: { slidesPerView: 1 } }}
				autoplay={{
					delay: 10000,
					pauseOnMouseEnter: true,
					waitForTransition: true,
				}}
				onRealIndexChange={(swiper) => {
					const activeSlide = swiper.realIndex
					if (isNaN(activeSlide)) return
					console.log("activeSlide", activeSlide)

					const newPrev = activeSlide - 1
					const newNext = activeSlide + 2
					setPrevNextTopics({
						prev: newPrev < 0 ? topics.length - 1 : newPrev,
						next: newNext > topics.length - 1 ? newNext - topics.length : newNext,
					})
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = navRefs.prev.current
					swiper.params.navigation.nextEl = navRefs.next.current
				}}
			>
				{topics.map((topic, index) => (
					<SwiperSlide key={topic.id}>
						{({ isActive, isPrev, isNext }) => (
							<Slide topic={topic} isActive={isActive || isPrev || isNext} index={index} />
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const SlideButton = forwardRef(({ className, topic, type, number }, ref) => (
	<div className={clsx(`article-slider-${type}-container text-sm unselectable`, className, cormorant.className)}>
		<div id={`article-slider-button-${type}`} className="article-slider-button" ref={ref}>
			<svg width="26" height="24" viewBox="0 0 26 24" fill="none">
				<path d="M2 12H18" stroke="black" strokeWidth="1.3" strokeLinecap="round" />
				<path d="M16 6L24 12L16 18Z" stroke="black" strokeWidth="1.3" fill="none" />
			</svg>
		</div>
		<div className="article-slider-theme">{topic?.title}</div>
		<div className="article-slider-tags">
			{Array.isArray(topic?.tag) &&
				topic.tag.map((tag, index) => (
					<Link key={tag} href={`/${tag.toLowerCase()}`}>
						{index + 1 === topic.tag.length ? tag : `${tag}, `}
					</Link>
				))}
		</div>
		<div className="article-slider-number">{number.toString().padStart(2, 0)}</div>
	</div>
))

export default ArticleSlider
