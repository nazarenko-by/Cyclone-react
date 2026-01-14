"use client"

import React, { useState } from "react"
import { useSelector } from "react-redux"

const HotTopics = () => {
	const topics = useSelector((state) => state.base.topics)
	const [topicsCount, setTopicsCount] = useState(6)
	return (
		<section className="hot-topics-section">
			<h2 className="hot-topics-title">Hot Topics</h2>
			<div className="hot-topics-content">
				{topics.slice(0, topicsCount).map((topic, index) => (
					<div key={index} className="hot-topic-item">
						<a href={topic.link} className="hot-topic-link">
							{topic.title}
						</a>
					</div>
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
