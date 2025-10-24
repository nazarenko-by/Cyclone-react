"use client"

import React, { useState } from "react"
import Link from "next/link"
import clsx from "clsx"

import Hamburger from "@/features/ui/Navigation/Hamburger"

import "@/styles/components/navigation.scss"

const navItems = [
	{ name: "Main", path: "/" },
	{ name: "Design", path: "/design" },
	{ name: "LiveStyle", path: "/liveStyle" },
	{ name: "Travel", path: "/travel" },
	{ name: "Art", path: "/art" },
	{ name: "Fashion", path: "/fashion" },
	{ name: "Contacts", path: "/contacts" },
]

const Navigation = ({ mobileMenu }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={clsx("navigation-wrapper", { "mobile-menu": mobileMenu })}>
			<nav className={clsx("navigation", { open: isOpen })}>
				<ul>
					{navItems.map((item) => (
						<li key={item.name}>
							<Link href={item.path} onClick={() => setIsOpen(false)}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			{mobileMenu && <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />}
		</div>
	)
}

export default Navigation
