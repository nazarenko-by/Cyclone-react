import React from "react"
import Logo from "@/features/ui/Logo"
import Menu from "@/features/ui/Header/Menu"

import "@/styles/components/header.scss"

const Header = () => {
	return (
		<header className="header-container">
			<Logo className={"py-5"} date={true} />
			<div className="line"></div>
			<Menu className={"py-5"} type={"header"} />
			<div className="line"></div>
		</header>
	)
}
export default Header
