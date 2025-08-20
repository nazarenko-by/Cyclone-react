"use client"

import React, { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"

import useWindowWidth from "@/hooks/useWindowWidth"
import Search from "@/components/Search"
import FollowUs from "@/components/FollowUs"
import clsx from "clsx"

const hiddenWidth = (type) => {
	switch (type) {
		case "header":
			return {
				navigation: { mobile: 850, hide: null },
				followUs: { hide: 1040 },
			}
		case "footer":
			return {
				navigation: { mobile: null, hide: 1240 },
				followUs: { hide: 768 },
			}
		default:
			return 0
	}
}

const Menu = ({ type, className, children }) => {
	const { navigation, followUs } = hiddenWidth(type)
	const windowWidth = useWindowWidth()
	const [isMobile, setIsMobile] = useState(false)
	const [isFollowUsVisible, setIsFollowUsVisible] = useState(true)
	const [isNavigationVisible, setIsNavigationVisible] = useState(true)

	useEffect(() => {
		navigation.mobile && setIsMobile(windowWidth < navigation.mobile)
		navigation.hide && setIsNavigationVisible(windowWidth > navigation.hide)
		followUs.hide && setIsFollowUsVisible(windowWidth > followUs.hide)
	}, [windowWidth])

	return (
		<div className={clsx("menu-container", className)}>
			{children}
			{isNavigationVisible && <Navigation mobileMenu={isMobile} />}
			<Search />
			{isFollowUsVisible && <FollowUs />}
		</div>
	)
}

export default Menu
