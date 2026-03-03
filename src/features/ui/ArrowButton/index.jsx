import clsx from "clsx"
import React, { forwardRef } from "react"

const ArrowButton = forwardRef(({ type, onClick, className, id }, ref) => {
	return (
		<div id={id} className={clsx(`arrow-button arrow-button-${type}`, className)} ref={ref} onClick={onClick}>
			<svg width="26" height="24" viewBox="0 0 26 24" fill="none">
				<path d="M2 12H18" stroke="black" strokeWidth="1.3" strokeLinecap="round" />
				<path d="M16 6L24 12L16 18Z" stroke="black" strokeWidth="1.3" fill="none" />
			</svg>
		</div>
	)
})

export default ArrowButton
