import React from "react"
import Link from "next/link"

const ReadMore = ({ id, className = "", text }) => {
	return (
		<Link href={`/article/${id}`} className={className}>
			{text}
		</Link>
	)
}

export default ReadMore
