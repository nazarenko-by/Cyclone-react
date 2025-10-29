import React, { useMemo } from "react"
import { useSelector } from "react-redux"

import Tags from "@/features/ui/Tags"
import ReadMore from "@/features/ui/ReadMore"

const MainArticle = () => {
	const topic = useSelector((state) => state.base.topics)
	const mainTopic = useMemo(() => {
		return topic.find((topic) => topic.category === 3)
	}, [topic])
	if (!mainTopic) return null

	return (
		<div className="main-article">
			<div className="paginator unselectable">
				<span>01</span> <span>05</span>
			</div>
			<Tags className="italic" tags={mainTopic.tag} />
			{/* <CommentShareButton id = {elementId}/> */}
			<div className="big-title">{mainTopic.title}</div>
			<div className="text">{mainTopic.text}</div>
			<ReadMore id={mainTopic.id} className="read-more" text="Read More" />
		</div>
	)
}

export default MainArticle
