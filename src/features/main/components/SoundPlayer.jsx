"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"

import { SOUND } from "@/features/main/helper/sound"
import ArrowButton from "@/features/ui/ArrowButton"

const SoundPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false)
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
			setIsPlaying(true)
			audio.play()
		} else {
			setIsPlaying(false)
			audio.pause()
		}
	}

	const currentSound = SOUND[current]

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.load()
		}
	}, [current])

	console.log(audioRef?.current?.paused)

	return (
		<div className="sound-player unselectable">
			<div className="sound-player-full-img">
				<Image fill style={{ objectFit: "cover" }} src={currentSound.image} alt={currentSound.soundName} />
			</div>
			<div className="sound-player-audio-controls">
				<div className="sound-player-control" style={{ backgroundImage: `url(${currentSound.image})` }}>
					<button
						className="sound-player-play-button"
						onClick={togglePlay}
						title={isPlaying ? "Pause" : "Play"}
					>
						<svg
							width="50%"
							height="50%"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="50" cy="50" r="48" className="circle" stroke="white" strokeWidth="5" />
							<path
								stroke="white"
								strokeWidth="6"
								d={isPlaying ? "M 30,25 L 30,75 M 70,75 L 70,25 Z" : "M 35,25 L 35,75 L 75,50 Z"}
							/>
							{/* { isPlaying ? <path d="M 30,25 L 30,75 M 70,75 L 70,25 Z" stroke="black" strokeWidth="2" /> : <path d="M 35,25 L 35,75 L 75,50 Z" fill="white" /> } */}
						</svg>
					</button>
				</div>

				<p className="sound-player-number text-sm">{String(currentSound.id).padStart(2, "0")}</p>
				<h3 className="sound-player-name text-md">{currentSound.soundName}</h3>
				<p className="sound-player-author text-sm">{currentSound.author}</p>
				<ArrowButton type="next" onClick={handlePrev} />
				<ArrowButton type="prev" onClick={handleNext} />
			</div>
			<audio ref={audioRef} controls={false}>
				<source src={currentSound.audio[0]} type="audio/mpeg" />
				<source src={currentSound.audio[1]} type="audio/webm" />
			</audio>
		</div>
	)
}

export default SoundPlayer
