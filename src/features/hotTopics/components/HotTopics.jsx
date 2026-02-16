"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"

import useResizeObserver from "@/shared/hooks/useResizeObserver"

import HotTopic from "@/features/hotTopics/components/HotTopic"
import LoadMoreButton from "@/features/ui/LoadMoreButton"

import { cormorantBold } from "@/shared/helpers/fonts"
import "@/styles/components/hotTopics.scss"

const HotTopics = () => {
	const wrapperRef = useRef(null)
	const topics = useSelector((state) => state.base.topics)
	const [topicsCount, setTopicsCount] = useState(6)
	const [isLoading, setIsLoading] = useState(false)

	const [columnsCount, setColumnsCount] = useState(3)
	const { width } = useResizeObserver(wrapperRef)

	const columnHeights = useRef([])

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

	const columns = useMemo(
		() => splitByColumns(topics.slice(0, topicsCount), columnsCount),
		[topics, columnsCount, topicsCount]
	)

	// Simulate loading more topics
	const handleLoadMore = () => {
		setIsLoading(true)
		setTimeout(() => {
			setTopicsCount(topicsCount + 6)
			setIsLoading(false)
		}, 800)
	}

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
			{topicsCount < topics.length && <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />}
			<div className="line m-5"></div>
		</section>
	)
}

export default HotTopics
