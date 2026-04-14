"use client"

import React, { useEffect, useState } from "react"
import Navigation from "@/features/ui/Navigation"

import useWindowWidth from "@/shared/hooks/useWindowWidth"
import Search from "@/features/ui/Search"
import FollowUs from "@/features/ui/FollowUs"
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
	}, [windowWidth, navigation.mobile, navigation.hide, followUs.hide])

	return (
		<div className={clsx("menu-container", className)}>
			{children}
			{isNavigationVisible && <Navigation mobileMenu={isMobile} />}
			<Search />
			{isFollowUsVisible && <FollowUs icons={true} title={"Follow us"} />}
		</div>
	)
}

export default Menu
