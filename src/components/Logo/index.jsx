import React from "react"
import Image from "next/image"
import Link from "next/link"

// import image from '/images/Logo.png'

import { getCurrentDate } from "@/helpers"

const LogoDate = ({ date }) => {
	return (
		<div className="logo">
			<div className="logo-image">
				<Link href="/" className="logo-link">
					<Image fill sizes="100%, 100%" src={"/images/Logo.png"} alt="Cyclone Logo" />
				</Link>
			</div>
			{date && <div className="logo-date text-sm">{getCurrentDate()}</div>}
		</div>
	)
}

export default LogoDate
