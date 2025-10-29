import React from "react"
import Link from "next/link"
import clsx from "clsx"

const Tags = ({ tags, className = "" }) => {
	return (
		<div className={clsx("tags-container", className)}>
			{Array.isArray(tags) &&
				tags.map((tag, index) => (
					<Link key={tag} href={`/${tag.toLowerCase()}`}>
						{index + 1 === tags.length ? tag : `${tag}, `}
					</Link>
				))}
		</div>
	)
}

export default Tags
