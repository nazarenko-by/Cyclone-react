"use client"

import React from "react"
import clsx from "clsx"
import ArrowButton from "@/features/ui/ArrowButton"

const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
	const getPageNumbers = () => {
		const pages = []
		const maxPagesToShow = 5

		if (totalPages <= maxPagesToShow) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			pages.push(1)

			let startPage = Math.max(2, currentPage - 1)
			let endPage = Math.min(totalPages - 1, currentPage + 1)

			if (startPage > 2) {
				pages.push("...")
			}

			for (let i = startPage; i <= endPage; i++) {
				pages.push(i)
			}

			if (endPage < totalPages - 1) {
				pages.push("...")
			}

			pages.push(totalPages)
		}

		return pages
	}

	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1)
		}
	}

	const pageNumbers = getPageNumbers()

	return (
		<div className={clsx("pagination", className)}>
			<ArrowButton
				type="prev"
				onClick={handlePrevious}
				className={clsx("pagination-arrow", currentPage === 1 && "disabled")}
			/>

			<div className="pagination-numbers">
				{pageNumbers.map((page, index) =>
					page === "..." ? (
						<span key={`dots-${index}`} className="pagination-dots">
							...
						</span>
					) : (
						<button
							key={page}
							onClick={() => onPageChange(page)}
							className={clsx("pagination-number", currentPage === page && "active")}
						>
							{String(page).padStart(2, "0")}
						</button>
					)
				)}
			</div>

			<ArrowButton
				type="next"
				onClick={handleNext}
				className={clsx("pagination-arrow", currentPage === totalPages && "disabled")}
			/>
		</div>
	)
}

export default Pagination
