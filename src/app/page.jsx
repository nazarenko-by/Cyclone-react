"use client"

import { lazy, useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTopics } from "@/store/baseSlice"

const EventsSlider = lazy(() => import("@/features/events/components/EventsSlider"))
const ArticleSlider = lazy(() => import("@/features/articles/components/ArticleSlider"))
const MainSection = lazy(() => import("@/features/main/components/MainSection"))
const HotTopics = lazy(() => import("@/features/hotTopics/components/HotTopics"))
const MostRead = lazy(() => import("@/features/mostRead/components/MostRead"))
const Subscribe = lazy(() => import("@/features/subscribe/components/Subscribe"))

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
			<MostRead />
			<Subscribe />
		</div>
	)
}
