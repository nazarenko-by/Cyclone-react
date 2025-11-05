"use client"

import React from "react"
import MainArticle from "@/features/main/components/MainArticle"
import SoundPlayer from "@/features/main/components/SoundPlayer"

import "@/styles/components/mainSection.scss"

const MainSection = () => {
	return (
		<section className="main-section">
			<div className="main-section-container">
				<MainArticle />
				<SoundPlayer />
			</div>
		</section>
	)
}

export default MainSection
