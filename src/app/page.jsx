"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTopics } from "@/store/baseSlice"

import EventsSlider from "@/features/events/components/EventsSlider"
import ArticleSlider from "@/features/articles/components/ArticleSlider"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import MainSection from "@/features/main/components/MainSection"

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
		</div>
	)
}
