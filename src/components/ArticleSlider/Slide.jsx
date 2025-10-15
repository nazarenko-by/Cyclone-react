"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Cormorant_Garamond } from "next/font/google"
import clsx from "clsx"

const cormorant = Cormorant_Garamond({
	weight: ["500", "700"],
	subsets: ["latin"],
	style: ["italic", "normal"],
})

const Slide = ({ topic, isActive, index }) => {
	if (!isActive) return null
	console.log({ topic, isActive, index })

	return (
		<div className="article-slide-content">
			{/* <img src={topic.image} alt={topic.title} className="slide-image unselectable" /> */}
			<Image
				src={`/images/topics/${topic.image}`}
				alt={topic.title}
				className="article-slide-image unselectable"
				width={100}
				height={100}
			/>
			<div className={clsx("article-slide-tags-container text-sm unselectable", cormorant.className)}>
				{(index + 1).toString().padStart(2, 0)}
				<span className="article-slider-tags">
					{Array.isArray(topic?.tag) &&
						topic.tag.map((tag, index) => (
							<Link key={tag} href={`/${tag.toLowerCase()}`}>
								{index + 1 === topic.tag.length ? tag : `${tag}, `}
							</Link>
						))}
				</span>
			</div>
			<h1 className={clsx("big-title article-slide-title text-xl", cormorant.className)}>{topic.title}</h1>
			<div className="article-slide-details text-sm text-fade-3">{topic.text}</div>
			<div className="article-slide-read-more">
				<Link href={`/article/${topic.id}`} className="article-slide-read-more-link text-sm">
					Read More
				</Link>
			</div>
		</div>
	)
}

export default Slide
