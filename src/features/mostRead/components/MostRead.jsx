"use client"

import React from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"

import MostReadArticle from "./MostReadArticle"

import { cormorantBold } from "@/shared/helpers/fonts"
import "@/styles/components/mostRead.scss"

const MostRead = () => {
	const topics = useSelector((state) => state.base.topics)

	const mostReadArticles = topics.slice(0, 4)

	return (
		<section className="most-read-section px-5">
			<h2 className={clsx("most-read-title text-5xl", cormorantBold.className)}>
				Most <span className="underline-yellow">Read Article</span>
			</h2>
			<div className="most-read-content">
				{mostReadArticles.map((article) => (
					<MostReadArticle key={article.id} article={article} />
				))}
			</div>
			<div className="line mt-5"></div>
		</section>
	)
}

export default MostRead
