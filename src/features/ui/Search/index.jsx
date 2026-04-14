"use client"

import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"

import useOutsideClick from "@/shared/hooks/useOutsideClick"

import "@/styles/components/search.scss"
import { useSelector } from "react-redux"

const Search = () => {
	const topics = useSelector((state) => state.base.topics)
	const [open, setOpen] = useState(false)
	const [inputValue, setInputValue] = useState("")
	const [filteredTopics, setFilteredTopics] = useState([])

	const outsideRef = useOutsideClick(() => setOpen(false))
	const inputRef = useRef(null)

	const onButtonClick = () => {
		if (!open) {
			setOpen(true)
			return
		} else if (!inputValue) {
			setOpen(false)
			return
		}
	}

	const onInputChange = (e) => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		if (!inputValue) {
			setFilteredTopics([])
			return
		}
		const filtered = topics
			.filter((topic) => topic.title.toLowerCase().includes(inputValue.toLowerCase()))
			.sort((a, b) => {
				const titleA = a.title.toLowerCase()
				const titleB = b.title.toLowerCase()

				const aStarts = titleA.startsWith(inputValue.toLowerCase())
				const bStarts = titleB.startsWith(inputValue.toLowerCase())

				if (aStarts && !bStarts) return -1
				if (!aStarts && bStarts) return 1

				return titleA.localeCompare(titleB)
			})
		setFilteredTopics(filtered)
	}, [inputValue, topics])

	return (
		<label ref={outsideRef} className={clsx("search", "p-1", { open: open })}>
			<button className="search-button" onClick={onButtonClick} title="Search" aria-label="Search">
				<svg viewBox="0 0 17.7 17.7">
					<path
						fill="currentColor"
						d="M12.6 11.2C13.5 10 14 8.6 14 7c0-3.9-3.1-7-7-7S0 3.1 0 7s3.1 7 7 7c1.6 0 3-.5 4.2-1.4l5.1 5.1 1.4-1.4-5.1-5.1zM2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
					/>
				</svg>
			</button>
			<input
				ref={inputRef}
				type="text"
				className="search-input"
				name="search"
				placeholder="Search…"
				value={inputValue}
				onChange={onInputChange}
				autoComplete="off"
			/>

			{open && filteredTopics.length > 0 && (
				<ul className="search-results">
					{filteredTopics.map((topic) => (
						<li key={topic.id}>
							<a href={`/article/${topic.id}`}>{topic.title}</a>
						</li>
					))}
				</ul>
			)}
		</label>
	)
}

export default Search
