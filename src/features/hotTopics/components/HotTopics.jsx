"use client"

import React, { useState } from "react"
import { useSelector } from "react-redux"

import HotTopic from "@/features/hotTopics/components/HotTopic"

import "@/styles/components/hotTopics.scss"

const HotTopics = () => {
	const topics = useSelector((state) => state.base.topics)
	const [topicsCount, setTopicsCount] = useState(6)
	return (
		<section className="hot-topics-section">
			<h2 className="hot-topics-title">Hot Topics</h2>
			<div className="hot-topics-content">
				{topics.slice(0, topicsCount).map((topic, index) => (
					<HotTopic key={index} topic={topic} />
				))}
				{topicsCount < topics.length && (
					<button className="load-more-button" onClick={() => setTopicsCount(topicsCount + 6)}>
						Load More
					</button>
				)}
			</div>
		</section>
	)
}

export default HotTopics
