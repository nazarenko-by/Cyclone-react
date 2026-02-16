"use client"

import React from "react"
import Link from "next/link"

import SocialActions from "@/features/ui/SocialActions"
import Tags from "@/features/ui/Tags"

import { cormorantBold, cormorantItalic } from "@/shared/helpers/fonts"

const MostReadArticle = ({ article }) => {
	return (
		<div className="most-read-article">
			<div className="article-background"></div>
			<div className="article-content">
				<SocialActions id={article.id} className="article-actions" />
				<div className="article-info">
					<Tags tags={article.tags} className={cormorantBold.className} />
					<Link
						href={`/article/${article.id}`}
						className={`article-title text-xl ${cormorantItalic.className}`}
					>
						{article.title}
					</Link>
					<div className={`article-author text-sm ${cormorantItalic.className}`}>{article.author}</div>
				</div>
			</div>
		</div>
	)
}

export default MostReadArticle
