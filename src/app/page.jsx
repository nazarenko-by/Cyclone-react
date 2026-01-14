"use client"

import { lazy, useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTopics } from "@/store/baseSlice"

// import EventsSlider from "@/features/events/components/EventsSlider"
// import ArticleSlider from "@/features/articles/components/ArticleSlider"
// import MainSection from "@/features/main/components/MainSection"
// import HotTopics from "@/features/hotTopics/components/HotTopics"
const EventsSlider = lazy(() => import("@/features/events/components/EventsSlider"))
const ArticleSlider = lazy(() => import("@/features/articles/components/ArticleSlider"))
const MainSection = lazy(() => import("@/features/main/components/MainSection"))
const HotTopics = lazy(() => import("@/features/hotTopics/components/HotTopics"))

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Home() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTopics())
	}, [])

	return (
		<div className="container">
			<EventsSlider />
			<ArticleSlider />
			<MainSection />
			<HotTopics />
		</div>
	)
}
