"use client"

import React, { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"

import useWindowWidth from "@/hooks/useWindowWidth"
import Search from "@/components/Search"
import FollowUs from "@/components/FollowUs"

const Menu = () => {
	const windowWidth = useWindowWidth()
	const [isMobile, setIsMobile] = useState(windowWidth < 768)

	useEffect(() => {
		setIsMobile(windowWidth < 768)
	}, [windowWidth])

	return (
		<div className="menu text-md">
			<Navigation mobileMenu={isMobile} />
			<Search />
			{!isMobile && <FollowUs />}
		</div>
	)
}

export default Menu
