"use client"

import React, { useState } from "react"
import clsx from "clsx"

import { cormorantBold, prozaLibre } from "@/shared/helpers/fonts"
import "@/styles/components/contacts.scss"
import FollowUs from "@/features/ui/FollowUs"

const Contacts = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})
	const [status, setStatus] = useState("idle")
	const [errors, setErrors] = useState({})

	const validateForm = () => {
		const newErrors = {}

		if (!formData.name.trim()) {
			newErrors.name = "Name is required"
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required"
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email"
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required"
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required"
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters"
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))

		// Очищаємо помилку поля при зміні
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}))
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		setStatus("loading")

		// Simulate API call with a timeout
		setTimeout(() => {
			setStatus("success")

			setTimeout(() => {
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				})

				setTimeout(() => {
					setStatus("idle")
				}, 3000)
			}, 2000)
		}, 1000)

		// try {
		// 	const response = await fetch('/api/contact', {
		// 		method: 'POST',
		// 		headers: { 'Content-Type': 'application/json' },
		// 		body: JSON.stringify(formData)
		// 	})
		// 	if (response.ok) {
		// 		setStatus("success")
		// 	} else {
		// 		setStatus("error")
		// 	}
		// } catch (error) {
		// 	setStatus("error")
		// }
	}

	return (
		<div className="container">
			<section className="contacts-page">
				<div className="contacts-header">
					<h1 className={clsx("contacts-title text-5xl", cormorantBold.className)}>Contact Us</h1>
					<p className={clsx("contacts-subtitle text-base", prozaLibre.className)}>
						We'd love to hear from you. Send us a message and we'll respond as soon as possible.
					</p>
				</div>

				<div className="contacts-content">
					{/* Contact Form */}
					<div className="contact-form-wrapper">
						<h2 className={clsx("text-2xl mb-4", cormorantBold.className)}>Send us a message</h2>

						<form onSubmit={handleSubmit} className="contact-form">
							{/* Name */}
							<div className={clsx("form-group", errors.name && "has-error")}>
								{errors.name && <span className="field-error">{errors.name}</span>}
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleChange}
									disabled={status === "loading" || status === "success"}
									className={clsx(prozaLibre.className)}
								/>
							</div>

							{/* Email */}
							<div className={clsx("form-group", errors.email && "has-error")}>
								{errors.email && <span className="field-error">{errors.email}</span>}
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={formData.email}
									onChange={handleChange}
									disabled={status === "loading" || status === "success"}
									className={clsx(prozaLibre.className)}
								/>
							</div>

							{/* Subject */}
							<div className={clsx("form-group", errors.subject && "has-error")}>
								{errors.subject && <span className="field-error">{errors.subject}</span>}
								<input
									type="text"
									name="subject"
									placeholder="Subject"
									value={formData.subject}
									onChange={handleChange}
									disabled={status === "loading" || status === "success"}
									className={clsx(prozaLibre.className)}
								/>
							</div>

							{/* Message */}
							<div className={clsx("form-group", errors.message && "has-error")}>
								{errors.message && <span className="field-error">{errors.message}</span>}
								<textarea
									name="message"
									placeholder="Your Message"
									rows="6"
									value={formData.message}
									onChange={handleChange}
									disabled={status === "loading" || status === "success"}
									className={clsx(prozaLibre.className)}
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={status === "loading" || status === "success"}
								className={clsx(
									"submit-button",
									prozaLibre.className,
									status === "loading" && "loading"
								)}
							>
								{status === "loading" ? (
									<>
										<span className="loader"></span>
										Sending...
									</>
								) : status === "success" ? (
									"✓ Sent!"
								) : (
									"Send Message"
								)}
							</button>

							{/* Success Message */}
							{status === "success" && (
								<div className="success-message">
									<p className={prozaLibre.className}>
										Thank you for your message! We'll get back to you soon.
									</p>
								</div>
							)}
						</form>
					</div>

					{/* Contact Information */}
					<div className="contact-info-wrapper">
						<h2 className={clsx("text-2xl mb-4", cormorantBold.className)}>Get in touch</h2>

						<div className="contact-info">
							{/* Email */}
							<div className="info-item">
								<div className="info-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="info-content">
									<h3 className={clsx("text-lg", cormorantBold.className)}>Email</h3>
									<a href="mailto:hello@cyclone.com" className={prozaLibre.className}>
										hello@cyclone.com
									</a>
								</div>
							</div>

							{/* Phone */}
							<div className="info-item">
								<div className="info-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="info-content">
									<h3 className={clsx("text-lg", cormorantBold.className)}>Phone</h3>
									<a href="tel:+1234567890" className={prozaLibre.className}>
										+1 (234) 567-890
									</a>
								</div>
							</div>

							{/* Address */}
							<div className="info-item">
								<div className="info-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="info-content">
									<h3 className={clsx("text-lg", cormorantBold.className)}>Address</h3>
									<p className={prozaLibre.className}>
										123 Magazine Street
										<br />
										New York, NY 10001
									</p>
								</div>
							</div>

							{/* Social Media */}
							<div className="info-item">
								<div className="info-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M6 9H2V21H6V9Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
											stroke="#2a2928"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="info-content">
									<h3 className={clsx("text-lg", cormorantBold.className)}>Follow Us</h3>
									<FollowUs />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contacts
