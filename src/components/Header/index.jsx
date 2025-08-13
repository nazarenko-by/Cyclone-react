import React from "react"
import Logo from "@/components/Logo"
import Menu from "@/components/Header/Menu"

import "@/styles/header.scss"

const Header = () => {
	return (
		<header className="header">
			<Logo date={true} />
			<div className="line"></div>
			<Menu />
			<div className="line"></div>
		</header>
	)
}
export default Header
