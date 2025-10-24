"use client"

import React, { useState } from "react"

import "@/styles/components/search.scss"
import clsx from "clsx"

const Search = () => {
	const [open, setOpen] = useState(false)
	const [inputValue, setInputValue] = useState("")
	const onButtonClick = () => {
		if (!open) {
			setOpen(true)
			return
		} else if (!inputValue) {
			setOpen(false)
			return
		}
		// Handle search logic here
	}
	const onInputChange = (e) => {
		setInputValue(e.target.value)
	}

	return (
		<label className={clsx("search", "p-1", { open: open })}>
			<button className="search-button" onClick={onButtonClick} aria-label="Search">
				<svg viewBox="0 0 17.7 17.7">
					<path
						fill="currentColor"
						d="M12.6 11.2C13.5 10 14 8.6 14 7c0-3.9-3.1-7-7-7S0 3.1 0 7s3.1 7 7 7c1.6 0 3-.5 4.2-1.4l5.1 5.1 1.4-1.4-5.1-5.1zM2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
					/>
				</svg>
			</button>
			<input
				type="text"
				className="search-input"
				name="search"
				placeholder="Search…"
				value={inputValue}
				onChange={onInputChange}
			/>
		</label>
	)
}

export default Search
