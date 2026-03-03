"use client"

import React from "react"
import Image from "next/image"
import clsx from "clsx"
import "@/styles/components/loadMoreButton.scss"
import { prozaLibre } from "@/shared/helpers/fonts"

const LoadMoreButton = ({ onClick, isLoading = false, className }) => {
	return (
		<button
			className={clsx(
				"load-more-button",
				isLoading && "loading",
				className,
				prozaLibre.className,
				"px-2 py-1 mt-4 mb-6"
			)}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? (
				<>
					<span className="load-more-spinner">
						<Image src="/images/loader.svg" alt="Loading..." width={24} height={24} priority />
					</span>
					<span className="load-more-text text-sm">Loading...</span>
				</>
			) : (
				<span className="load-more-text text-sm">Load More Topics</span>
			)}
		</button>
	)
}

export default LoadMoreButton
