"use client"

import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import MainArticle from "./MainArticle"
import MainSlider from "./MainSlider"

import "@/styles/components/mainSection.scss"

const MainSection = () => {
	const topic = useSelector((state) => state.base.topics)
	const mainTopic = useMemo(() => {
		return topic.find((topic) => topic.category === 3)
	}, [topic])
	if (!mainTopic) return null

	return (
		<section className="main-section">
			<div className="main-section-container">
				<MainArticle topic={mainTopic} />
				<MainSlider />
			</div>
		</section>
	)
}

export default MainSection
