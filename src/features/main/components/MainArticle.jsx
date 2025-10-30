import React, { useMemo } from "react"
import { useSelector } from "react-redux"

import Tags from "@/features/ui/Tags"
import ReadMore from "@/features/ui/ReadMore"
import CommentShareButtons from "@/features/ui/CommentShareButtons"

import { cormorantBoldItalic, cormorantBold, cormorantThin } from "@/shared/helpers/fonts"
import clsx from "clsx"

const MainArticle = () => {
	const topic = useSelector((state) => state.base.topics)
	const mainTopic = useMemo(() => {
		return topic.find((topic) => topic.category === 3)
	}, [topic])
	if (!mainTopic) return null

	return (
		<div className="main-article">
			<div className={clsx("paginator unselectable", cormorantThin.className)}>
				<span>{mainTopic.category.toString().padStart(2, 0)}</span>{" "}
				<span>{mainTopic.id.toString().padStart(2, 0)}</span>
			</div>
			<Tags className={clsx("main-article-tags", cormorantBoldItalic.className)} tags={mainTopic.tag} />
			<CommentShareButtons id={mainTopic.id} />
			<div className={clsx("big-title text-5xl", cormorantBold.className)}>{mainTopic.title}</div>
			<div className="text">{mainTopic.text}</div>
			<ReadMore id={mainTopic.id} className="read-more" text="Read More" />
		</div>
	)
}

export default MainArticle
