"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"

import { useDeviceType } from "@/shared/hooks/useDeviceType"

import HotTopic from "@/features/hotTopics/components/HotTopic"
import LoadMoreButton from "@/features/ui/LoadMoreButton"

import { cormorantBold } from "@/shared/helpers/fonts"
import "@/styles/components/hotTopics.scss"

const HotTopics = () => {
	const topics = useSelector((state) => state.base.topics)
	const [topicsCount, setTopicsCount] = useState(6)
	const [isLoading, setIsLoading] = useState(false)

	const [columnsCount, setColumnsCount] = useState(3)
	const device = useDeviceType()

	const columnHeights = useRef([])

	useEffect(() => {
		if (device === "desktop") {
			setColumnsCount(3)
		} else if (device === "tablet") {
			setColumnsCount(2)
		} else {
			setColumnsCount(1)
		}
	}, [device])

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
		<section className="hot-topics-section">
			<h2 className={clsx("hot-topics-title text-5xl", cormorantBold.className)}>Hot Topics</h2>
			<div className="hot-topics-content px-5">
				{columns.map((column, colIndex) => (
					<div className="hot-topics-column" key={colIndex}>
						{column.map((topic) => (
							<HotTopic key={topic.id} topic={topic} />
						))}
					</div>
				))}
			</div>
			{topicsCount < topics.length && <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />}
		</section>
	)
}

export default HotTopics
