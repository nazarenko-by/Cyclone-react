import React from "react"

import Logo from "@/features/ui/Logo"
import Menu from "@/features/ui/Header/Menu"

import "@/styles/components/footer.scss"

const Footer = () => {
	return (
		<footer className="footer-container">
			<Menu className="footer-menu py-5" type={"footer"}>
				<Logo date={false} />
			</Menu>
			<div className="line"></div>
			<div className="footer-rights py-5">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} CYCLONE. Desigened by Fugue. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
