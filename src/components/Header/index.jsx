import React from "react"
import Logo from "@/components/Logo"
import Menu from "@/components/Header/Menu"

import "@/styles/header.scss"

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
