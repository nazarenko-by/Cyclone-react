"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTopics } from "@/slices/Base"

import EventsSlider from "@/components/EventsSlider"
import ArticleSlider from "@/components/ArticleSlider"

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
		</div>
	)
}
