"use client"

import { useEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

const useResizeObserver = (ref, square = false) => {
	const [dimensions, setDimensions] = useState({})
	useEffect(() => {
		const observeTarget = ref.current
		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				const sizes = {
					x: entry.contentRect.x,
					y: entry.contentRect.y,
					top: entry.contentRect.top,
					left: entry.contentRect.left,
					right: entry.contentRect.right,
					width: entry.contentRect.width,
					height: square ? entry.contentRect.width : entry.contentRect.height,
					bottom: square ? entry.contentRect.width : entry.contentRect.height,
				}
				setDimensions(sizes)
			})
		})
		resizeObserver.observe(observeTarget)
		return () => {
			resizeObserver.unobserve(observeTarget)
		}
	}, [ref, square])
	return dimensions
}
export default useResizeObserver
