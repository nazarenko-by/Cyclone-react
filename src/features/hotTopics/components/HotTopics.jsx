"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"

import useResizeObserver from "@/shared/hooks/useResizeObserver"

import HotTopic from "@/features/hotTopics/components/HotTopic"
import LoadMoreButton from "@/features/ui/LoadMoreButton"
import Pagination from "@/features/ui/Pagination"

import { cormorantBold } from "@/shared/helpers/fonts"
import "@/styles/components/hotTopics.scss"
import "@/styles/components/pagination.scss"

const HotTopics = () => {
	const wrapperRef = useRef(null)
	const topics = useSelector((state) => state.base.topics)

	const TOPICS_PER_PAGE = 6
	const PAGES_TO_SHOW = 3

	const [activePage, setActivePage] = useState(1)
	const [currentPage, setCurrentPage] = useState(1)
	const [loadedPages, setLoadedPages] = useState(1)
	const [isLoading, setIsLoading] = useState(false)

	const [columnsCount, setColumnsCount] = useState(3)
	const { width } = useResizeObserver(wrapperRef)

	const columnHeights = useRef([])

	useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth"
		return () => {
			document.documentElement.style.scrollBehavior = "auto"
		}
	}, [])

	useEffect(() => {
		if (width >= 1024) {
			setColumnsCount(3)
		} else if (width >= 768) {
			setColumnsCount(2)
		} else {
			setColumnsCount(1)
		}
	}, [width])

	useEffect(() => {
		columnHeights.current = new Array(columnsCount).fill(0)
	}, [columnsCount])

	const splitByColumns = (items, columnsCount) => {
		const columns = Array.from({ length: columnsCount }, () => [])

		items.forEach((item, index) => {
			const columnIndex = index % columnsCount
			columns[columnIndex].push(item)
		})

		return columns
	}

	const visibleTopics = useMemo(() => {
		const startIndex = (currentPage - 1) * TOPICS_PER_PAGE
		const endIndex = startIndex + TOPICS_PER_PAGE * loadedPages
		return topics.slice(startIndex, endIndex)
	}, [topics, currentPage, loadedPages])

	const columns = useMemo(() => splitByColumns(visibleTopics, columnsCount), [visibleTopics, columnsCount])

	const smoothScrollToTop = () => {
		if (wrapperRef.current) {
			const headerOffset = 100
			const elementPosition = wrapperRef.current.getBoundingClientRect().top
			const offsetPosition = elementPosition + window.scrollY - headerOffset

			const startPosition = window.scrollY
			const distance = offsetPosition - startPosition
			const duration = 600
			let start = null

			const animation = (currentTime) => {
				if (start === null) start = currentTime
				const timeElapsed = currentTime - start
				const progress = Math.min(timeElapsed / duration, 1)

				const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

				window.scrollTo(0, startPosition + distance * ease)

				if (timeElapsed < duration) {
					requestAnimationFrame(animation)
				}
			}

			requestAnimationFrame(animation)
		}
	}

	const handlePageChange = (page) => {
		setCurrentPage(page)
		setActivePage(page)
		setLoadedPages(1)
		smoothScrollToTop()
	}

	const handleLoadMore = () => {
		setIsLoading(true)
		setTimeout(() => {
			setActivePage(activePage + 1)
			setLoadedPages(loadedPages + 1)
			setIsLoading(false)
		}, 800)
	}

	const totalPages = Math.min(Math.ceil(topics.length / TOPICS_PER_PAGE), PAGES_TO_SHOW)

	return (
		<section className="hot-topics-section px-5" ref={wrapperRef}>
			<h2 className={clsx("hot-topics-title text-5xl", cormorantBold.className)}>Hot Topics</h2>
			<div className="hot-topics-content">
				{columns.map((column, colIndex) => (
					<div className="hot-topics-column" key={colIndex}>
						{column.map((topic) => (
							<HotTopic key={topic.id} topic={topic} />
						))}
					</div>
				))}
			</div>

			{totalPages > 1 && (
				<>
					<LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />
					<Pagination currentPage={activePage} totalPages={totalPages} onPageChange={handlePageChange} />
				</>
			)}

			<div className="line m-5"></div>
		</section>
	)
}

export default HotTopics
