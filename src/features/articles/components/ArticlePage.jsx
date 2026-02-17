"use client"

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { fetchTopics } from "@/store/baseSlice"
import SocialActions from "@/features/ui/SocialActions"
import Tags from "@/features/ui/Tags"

import { cormorantBold, cormorantItalic, prozaLibre } from "@/shared/helpers/fonts"
import "@/styles/components/articlePage.scss"

export default function ArticlePage({ params }) {
	const dispatch = useDispatch()
	const topics = useSelector((state) => state.base.topics)
	const articleId = parseInt(params.id)

	useEffect(() => {
		if (topics.length === 0) {
			dispatch(fetchTopics())
		}
	}, [dispatch, topics.length])

	const article = topics.find((topic) => topic.id === articleId)

	if (topics.length > 0 && !article) {
		notFound()
	}

	if (!article) {
		return (
			<div className="article-loading">
				<div className="loader"></div>
			</div>
		)
	}

	const relatedArticles = topics
		.filter((topic) => topic.id !== articleId && topic.tags?.some((tag) => article.tags?.includes(tag)))
		.slice(0, 3)

	return (
		<div className="container">
			<article className="article-page">
				{/* Breadcrumbs */}
				<nav className={clsx("breadcrumbs", prozaLibre.className)}>
					<Link href="/">Home</Link>
					<span> / </span>
					{article.tags && article.tags[0] && (
						<>
							<Link href={`/${article.tags[0].toLowerCase()}`}>{article.tags[0]}</Link>
							<span> / </span>
						</>
					)}
					<span>{article.title}</span>
				</nav>

				{/* Header */}
				<header className="article-header">
					<h1 className={clsx("article-title text-5xl", cormorantBold.className)}>{article.title}</h1>

					<div className="article-meta">
						<Tags tags={article.tags} className={cormorantBold.className} />
						<SocialActions id={article.id} />
					</div>

					{article.author && (
						<div className={clsx("article-author text-base", cormorantItalic.className)}>
							{article.author}
						</div>
					)}

					{article.date && (
						<time className={clsx("article-date text-sm", prozaLibre.className)}>
							{new Date(article.date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
					)}
				</header>

				{/* Featured Image */}
				{article.image && (
					<div className="article-image-wrapper">
						<Image
							src={`/images/topics/${article.image}`}
							alt={article.title}
							width={1200}
							height={600}
							className="article-image"
							priority
						/>
					</div>
				)}

				{/* Content */}
				<div className={clsx("article-content", prozaLibre.className)}>
					<div className="article-text" dangerouslySetInnerHTML={{ __html: article.text }} />
				</div>

				{/* Footer */}
				<footer className="article-footer">
					<div className="article-footer-actions">
						<SocialActions id={article.id} />
						<span className={clsx("text-sm", prozaLibre.className)}>Share this article</span>
					</div>
				</footer>

				{/* Related Articles */}
				{relatedArticles.length > 0 && (
					<aside className="related-articles">
						<h2 className={clsx("text-2xl", cormorantBold.className)}>Related Articles</h2>
						<div className="related-articles-grid">
							{relatedArticles.map((relatedArticle) => (
								<Link
									href={`/article/${relatedArticle.id}`}
									key={relatedArticle.id}
									className="related-article-card"
								>
									{relatedArticle.image && (
										<div className="related-article-image">
											<Image
												src={`/images/topics/${relatedArticle.image}`}
												alt={relatedArticle.title}
												width={400}
												height={250}
												className="image"
											/>
										</div>
									)}
									<div className="related-article-content">
										<Tags tags={relatedArticle.tags} className={cormorantBold.className} />
										<h3 className={clsx("text-lg", cormorantItalic.className)}>
											{relatedArticle.title}
										</h3>
										{relatedArticle.author && (
											<p className={clsx("text-sm", cormorantItalic.className)}>
												{relatedArticle.author}
											</p>
										)}
									</div>
								</Link>
							))}
						</div>
					</aside>
				)}

				<div className="line m-5"></div>
			</article>
		</div>
	)
}
