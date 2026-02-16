"use client"
import { useEffect, useState } from "react"

const useDeviceType = () => {
	const [device, setDevice] = useState("unknown")

	useEffect(() => {
		const ua = navigator.userAgent.toLowerCase()

		if (/mobile|android|iphone|ipad|ipod/i.test(ua)) {
			setDevice("mobile")
		} else if (/tablet|ipad/i.test(ua)) {
			setDevice("tablet")
		} else {
			setDevice("desktop")
		}
	}, [])

	return device
}

export default useDeviceType
