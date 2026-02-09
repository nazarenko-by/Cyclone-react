import React from "react"
import Link from "next/link"
import Image from "next/image"

import SocialActions from "@/features/ui/SocialActions"
import Tags from "@/features/ui/Tags"

import { cormorantBold, cormorantItalic } from "@/shared/helpers/fonts"

const HotTopic = ({ topic }) => {
	return (
		<div className="hot-topic-item">
			<Image
				src={`/images/topics/${topic.image}`}
				alt={topic.title}
				className="hot-topic-image"
				loading="lazy"
				style={{ objectFit: "cover" }}
				fill
			/>
			<Tags tags={topic.tags} className={cormorantBold.className} />
			<SocialActions id={topic.id} />
			<Link href={`/article/${topic.id}`} className={`title text-2xl ${cormorantItalic.className}`}>
				{topic.title}
			</Link>
			<div className="text text-sm text-fade-3">{topic.text}</div>
			<div className={`topic-author text-sm ${cormorantItalic.className}`}>{topic.author}</div>
		</div>
	)
}

export default HotTopic
