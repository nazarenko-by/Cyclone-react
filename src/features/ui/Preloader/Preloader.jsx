"use client"

import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Image from "next/image"

import { assetPath } from "@/shared/helpers/assetPath"

import "@/styles/components/preloader.scss"
const Preloader = () => {
	const isLoading = useSelector((state) => state.base.preloader)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		if (!isLoading) {
			const timer = setTimeout(() => {
				setIsVisible(false)
			}, 500)

			return () => clearTimeout(timer)
		}
	}, [isLoading])

	if (!isVisible && !isLoading) {
		return null
	}

	return (
		<div className={`preloader ${!isLoading ? "preloader-hidden" : ""}`}>
			<div className="preloader-content">
				<div className="preloader-logo-wrapper">
					<Image
						src={assetPath("/images/Logo.svg")}
						alt="Cyclone Logo"
						width={180}
						height={60}
						className="preloader-logo"
						priority
					/>
				</div>
			</div>
		</div>
	)
}

export default Preloader
