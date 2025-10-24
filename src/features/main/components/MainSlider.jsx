"use client"

import React, { useState, useRef, useEffect } from "react"
import { SOUND } from "@/features/main/helper/sound"

const MainSlider = () => {
	const [current, setCurrent] = useState(0)
	const audioRef = useRef(null)

	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % SOUND.length)
	}

	const handlePrev = () => {
		setCurrent((prev) => (prev - 1 + SOUND.length) % SOUND.length)
	}

	const togglePlay = () => {
		const audio = audioRef.current
		if (audio.paused) {
			audio.play()
		} else {
			audio.pause()
		}
	}

	const currentSound = SOUND[current]

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.load()
		}
	}, [current])

	return (
		<div className="main-slider">
			<div className="main-slider__image">
				<img src={currentSound.image} alt={currentSound.soundName} />
			</div>

			<div className="main-slider__controls">
				<button onClick={handlePrev} className="main-slider__btn">
					←
				</button>

				<button onClick={togglePlay} className="main-slider__play">
					▶
				</button>

				<button onClick={handleNext} className="main-slider__btn">
					→
				</button>
			</div>

			<div className="main-slider__info">
				<p className="main-slider__number">{String(currentSound.id).padStart(2, "0")}</p>
				<h3 className="main-slider__name">{currentSound.soundName}</h3>
				<p className="main-slider__author">{currentSound.autor}</p>
			</div>

			<audio ref={audioRef} controls={false}>
				<source src={currentSound.audio[0]} type="audio/mpeg" />
				<source src={currentSound.audio[1]} type="audio/webm" />
			</audio>
		</div>
	)
}

export default MainSlider
