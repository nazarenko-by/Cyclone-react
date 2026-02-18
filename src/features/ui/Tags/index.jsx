import React from "react"
import { useRouter } from "next/navigation"
import clsx from "clsx"

const Tags = ({ tags, className = "" }) => {
	const router = useRouter()
	const handleTagClick = (e, tag) => {
		e.preventDefault()
		e.stopPropagation()
		router.push(`/${tag.toLowerCase()}`)
	}

	return (
		<div className={clsx("tags-container", className)}>
			{Array.isArray(tags) &&
				tags.map((tag, index) => (
					<span key={tag} className="tag" onClick={(e) => handleTagClick(e, tag)}>
						{index + 1 === tags.length ? tag : `${tag}, `}
					</span>
				))}
		</div>
	)
}

export default Tags
