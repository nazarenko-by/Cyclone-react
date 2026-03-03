"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTopics } from "@/store/baseSlice"
import CategoryPage from "@/features/categories/components/CategoryPage"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function LiveStylePage() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTopics())
	}, [dispatch])

	return (
		<div className="container">
			<CategoryPage category="LiveStyle" title="LiveStyle" />
		</div>
	)
}
