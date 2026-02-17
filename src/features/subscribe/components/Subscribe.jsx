"use client"

import React, { useState } from "react"
import clsx from "clsx"

import { cormorantBold, prozaLibre } from "@/shared/helpers/fonts"
import "@/styles/components/subscribe.scss"

const Subscribe = () => {
	const [email, setEmail] = useState("")
	const [status, setStatus] = useState("idle") // idle, loading, success, error
	const [message, setMessage] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!email) {
			setStatus("error")
			setMessage("Email is required")
			return
		}

		if (!emailRegex.test(email)) {
			setStatus("error")
			setMessage("Please enter a valid email address")
			return
		}

		setStatus("loading")
		setMessage("")

		// Form submission simulation
		setTimeout(() => {
			setStatus("success")
			setMessage("Thank you for subscribing!")

			setTimeout(() => {
				setEmail("")
			}, 2000)

			setTimeout(() => {
				setStatus("idle")
				setMessage("")
			}, 5000)
		}, 1000)

		// try {
		// 	const response = await fetch('/api/subscribe', {
		// 		method: 'POST',
		// 		headers: { 'Content-Type': 'application/json' },
		// 		body: JSON.stringify({ email })
		// 	})
		// 	if (response.ok) {
		// 		setStatus("success")
		// 		setMessage("Thank you for subscribing!")
		// 		setEmail("")
		// 	} else {
		// 		setStatus("error")
		// 		setMessage("Something went wrong. Please try again.")
		// 	}
		// } catch (error) {
		// 	setStatus("error")
		// 	setMessage("Network error. Please try again.")
		// }
	}

	const handleInputChange = (e) => {
		setEmail(e.target.value)

		if (status === "error") {
			setStatus("idle")
			setMessage("")
		}
	}

	return (
		<section className="subscribe-section p-5">
			<div className="subscribe-container">
				<h2 className={clsx("subscribe-title text-5xl", cormorantBold.className)}>Subscribe</h2>
				<p className={clsx("subscribe-description text-base", prozaLibre.className)}>
					Get the latest articles and updates delivered to your inbox
				</p>

				<form onSubmit={handleSubmit} className="subscribe-form">
					<div
						className={clsx(
							"input-wrapper",
							status === "error" && "error",
							status === "success" && "success"
						)}
					>
						{message && (
							<span className={clsx("input-label", status === "error" ? "error" : "success")}>
								{message}
							</span>
						)}

						<input
							type="email"
							placeholder="Your e-mail"
							value={email}
							onChange={handleInputChange}
							disabled={status === "loading" || status === "success"}
							className={clsx("subscribe-input", prozaLibre.className)}
						/>
						<button
							type="submit"
							disabled={status === "loading" || status === "success"}
							className={clsx(
								"subscribe-button",
								prozaLibre.className,
								status === "loading" && "loading"
							)}
						>
							{status === "loading" ? (
								<span className="loader"></span>
							) : status === "success" ? (
								"✓"
							) : (
								"Subscribe"
							)}
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Subscribe
