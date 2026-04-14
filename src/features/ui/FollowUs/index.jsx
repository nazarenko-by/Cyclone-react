import React from "react"
import Link from "next/link"
import Image from "next/image"

import "@/styles/components/followUs.scss"
import instagramImg from "@public/images/social/instagram.svg"
import linkedinImg from "@public/images/social/linkedin.svg"
import threadsImg from "@public/images/social/threads.svg"

const socialLinks = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/nby.frontend/",
		icon: instagramImg,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/bohdan-nazarenko-by/",
		icon: linkedinImg,
	},
	{
		name: "Threads",
		url: "https://www.threads.com/@nby.frontend",
		icon: threadsImg,
	},
]

const FollowUs = ({ title, icons }) => {
	return (
		<div className="follow-us-container">
			{title && <p className="unselectable">{title}</p>}
			<ul className="follow-us-list">
				{socialLinks.map((link) => (
					<li key={link.name}>
						<Link
							className="follow-us-link"
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							title={link.name}
						>
							{icons ? <Image src={link.icon} alt={link.name} width={20} height={20} /> : link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FollowUs
