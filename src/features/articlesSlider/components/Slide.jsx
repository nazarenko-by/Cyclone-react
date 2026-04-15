"use client"

import React from "react"
import Image from "next/image"
import clsx from "clsx"

import Tags from "@/features/ui/Tags"
import ReadMore from "@/features/ui/ReadMore"

import { assetPath } from "@/shared/helpers/assetPath"
import { cormorantBoldItalic, cormorantItalic } from "@/shared/helpers/fonts"
import SocialActions from "@/features/ui/SocialActions"

const Slide = ({ topic, isActive, index }) => {
	if (!isActive) return null

	return (
		<div className="article-slide-content">
			<Image
				src={assetPath(`/images/topics/${topic.image}`)}
				alt={topic.title}
				className="article-slide-image unselectable"
				width={100}
				height={100}
			/>
			<div className={clsx("article-slide-tags-container text-sm unselectable", cormorantBoldItalic.className)}>
				{(index + 1).toString().padStart(2, 0)}
				<Tags tags={topic.tags} className="article-slide-tags" />
			</div>
			<SocialActions id={topic.id} />
			<h1 className={clsx("big-title article-slide-title text-xl", cormorantItalic.className)}>
				<span className="title-line">{topic.title}</span>
			</h1>
			<div className="article-slide-details text-sm text-fade-3">{topic.text}</div>
			<div className="article-slide-read-more">
				<ReadMore id={topic.id} className="article-slide-read-more-link read-more text-sm" text="Read More" />
			</div>
		</div>
	)
}

export default Slide
