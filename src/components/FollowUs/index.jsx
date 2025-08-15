import React from "react"
import Link from "next/link"
import Image from "next/image"

import "@/styles/followUs.scss"

const socialLinks = [
	{
		name: "Instagram",
		url: "https://www.instagram.com",
		icon: "/images/social/instagram.svg",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com",
		icon: "/images/social/linkedin.svg",
	},
	{
		name: "X",
		url: "https://www.x.com",
		icon: "/images/social/x-logo.svg",
	},
]

const FollowUs = () => {
	return (
		<div className="follow-us-container">
			<p>Follow Us</p>
			<ul className="follow-us-list">
				{socialLinks.map((link) => (
					<li key={link.name}>
						<Link className="follow-us-link" href={link.url} target="_blank" rel="noopener noreferrer">
							<Image src={link.icon} alt={link.name} width={20} height={20} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FollowUs
