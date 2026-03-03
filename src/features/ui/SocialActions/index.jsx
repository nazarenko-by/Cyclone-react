import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { setLikeValue } from "@/store/socialSlice"

const SocialActions = ({ id }) => {
	const dispatch = useDispatch()
	const likes = useSelector((state) => state.social.likes)

	const onLikeClick = () => {
		dispatch(setLikeValue({ id }))
	}

	return (
		<div className="comment-share-button">
			<button className="like-button" title="Like" onClick={onLikeClick}>
				<svg width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
					<circle cx="128" cy="128" r="120" stroke="#C7BBB9" strokeWidth="14" fill="none" />
					<path
						d="M 128,206
                            C 128,206 60,160 60,120
                            C 60,80 100,50 128,90
                            C 156,50 196,80 196,120
                            C 196,160 128,206 128,206"
						fill={likes.includes(id) ? "#C7BBB9" : "none"}
						stroke="#C7BBB9"
						strokeWidth="14"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
				</svg>
			</button>
			<button className="comment-button" title="Comment">
				<svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="128" cy="128" r="120" stroke="#C7BBB9" strokeWidth="14" fill="none" />
					<path
						d="M180 72 H76 a12 12 0 0 0 -12 12 V162 a12 12 0 0 0 12 12 H120 L148 194 V174 H180 a12 12 0 0 0 12 -12 V84 a12 12 0 0 0 -12 -12 Z"
						fill="none"
						stroke="#C7BBB9"
						strokeWidth="14"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
				</svg>
			</button>
			<button className="share-button" title="Share">
				<svg width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
					<circle cx="128" cy="128" r="120" stroke="#C7BBB9" strokeWidth="14" fill="none" />
					<path
						d="M 80,105  L 80,80  L 176,80  L 176,176  L 80,176  L 80,128  L 150,128  M 118,98 L 150,128 L 118,158"
						fill="none"
						stroke="#C7BBB9"
						strokeWidth="14"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
				</svg>
			</button>
		</div>
	)
}

export default SocialActions
