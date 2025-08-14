"use client"

import React, { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"

import useWindowWidth from "@/hooks/useWindowWidth"
import Search from "@/components/Search"
import FollowUs from "@/components/FollowUs"
import clsx from "clsx"

const Menu = ({ className }) => {
	const windowWidth = useWindowWidth()
	const [isMobile, setIsMobile] = useState(false)
	const [isFollowUsVisible, setIsFollowUsVisible] = useState(true)

	useEffect(() => {
		setIsMobile(windowWidth < 768)
		setIsFollowUsVisible(windowWidth > 1023)
	}, [windowWidth])

	return (
		<div className={clsx("menu-container", className)}>
			<Navigation mobileMenu={isMobile} />
			<Search />
			{isFollowUsVisible && <FollowUs />}
		</div>
	)
}

export default Menu
