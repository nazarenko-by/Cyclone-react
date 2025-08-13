import React from "react"
import Link from "next/link"
import Image from "next/image"

import "@/styles/followUs.scss"

const FollowUs = () => {
	return (
		<div className="follow-us-container">
			<p>Follow Us</p>
			<ul className="follow-us-list">
				<li>
					<Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
						<Image src={"/images/social/instagram.svg"} alt="Instagram" width={20} height={20} />
					</Link>
				</li>
				<li>
					<Link href="https://www.x.com" target="_blank" rel="noopener noreferrer">
						<Image src="/images/social/x-logo.svg" alt="X" width={20} height={20} />
					</Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
						<Image src="/images/social/linkedin.svg" alt="LinkedIn" width={20} height={20} />
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default FollowUs
