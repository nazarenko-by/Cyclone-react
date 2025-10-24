"use client"

import { useState, useEffect } from "react"

const useWindowWidth = () => {
	const [width, setWidth] = useState(0)

	useEffect(() => {
		// Ensure window is defined (client-side execution)
		if (typeof window !== "undefined") {
			const handleResize = () => {
				setWidth(window.innerWidth)
			}

			// Set initial width on component mount
			handleResize()

			// Add event listener for window resize
			window.addEventListener("resize", handleResize)

			// Clean up event listener on component unmount
			return () => {
				window.removeEventListener("resize", handleResize)
			}
		}
	}, []) // Empty dependency array ensures this runs once on mount

	return width
}

export default useWindowWidth
