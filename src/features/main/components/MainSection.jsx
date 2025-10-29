"use client"

import React from "react"
import MainArticle from "./MainArticle"
import MainSlider from "./MainSlider"

import "@/styles/components/mainSection.scss"

const MainSection = () => {
	return (
		<section className="main-section">
			<div className="main-section-container">
				<MainArticle />
				<MainSlider />
			</div>
		</section>
	)
}

export default MainSection
