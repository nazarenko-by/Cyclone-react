import React from "react"
import Image from "next/image"
import Link from "next/link"

import { getCurrentDate } from "@/shared/helpers"
import clsx from "clsx"

const LogoDate = ({ className, date }) => {
	return (
		<div className={clsx("logo-date-container", className)}>
			<div className="logo-image">
				<Link href="/" className="logo-link">
					<Image fill sizes="100%, 100%" src={"/images/Logo.svg"} alt="Cyclone Logo" />
				</Link>
			</div>
			{date && <div className="logo-date text-sm">{getCurrentDate()}</div>}
		</div>
	)
}

export default LogoDate
