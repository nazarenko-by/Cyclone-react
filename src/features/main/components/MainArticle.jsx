import React from "react"
import clsx from "clsx"

const MainArticle = ({ topic }) => {
	return (
		<article className="main-article">
			<p className="main-article__tags">{topic.tag.join(", ")}</p>
			<h1 className="main-article__title">
				{topic.title.split(" ").map((word, i) => {
					const styleObj = topic.style?.find((s) => Object.keys(s)[0] === word)
					if (styleObj) {
						const className = Object.values(styleObj)[0]
						return (
							<span key={i} className={clsx(className)}>
								{word + " "}
							</span>
						)
					}
					return word + " "
				})}
			</h1>
			<p className="main-article__text">{topic.text}</p>
			<a href="#" className="main-article__link">
				Read More
			</a>
		</article>
	)
}

export default MainArticle
