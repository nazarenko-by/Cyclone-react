"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import Image from "next/image"

import ArrowButton from "@/features/ui/ArrowButton"

import { getTimeText } from "@/features/main/helper"
import { SOUND } from "@/features/main/helper/sound"

const SoundPlayer = () => {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [current, setCurrent] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

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

	const handleTimelineClick = (e) => {
		const timeline = e.currentTarget
		const clickX = e.clientX - timeline.getBoundingClientRect().left
		const timelineWidth = timeline.offsetWidth
		const newTime = (clickX / timelineWidth) * duration
		if (audioRef.current) {
			audioRef.current.currentTime = newTime
		}
	}

	const currentSound = useMemo(() => SOUND[current], [current])

	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return

		const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
		const handleDuration = () => setDuration(audio.duration)

		audio.addEventListener("timeupdate", handleTimeUpdate)
		audio.addEventListener("loadedmetadata", handleDuration)
		audio.addEventListener("ended", handleNext)

		return () => {
			audio.removeEventListener("timeupdate", handleTimeUpdate)
			audio.removeEventListener("loadedmetadata", handleDuration)
			audio.removeEventListener("ended", handleNext)
		}
	}, [])

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.load()
		}
	}, [current])

	const progress = (currentTime / duration) * 100 || 0

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
						</svg>
					</button>
				</div>

				<p className="sound-player-number text-sm">{String(currentSound.id).padStart(2, "0")}</p>
				<h3 className="sound-player-name text-md">{currentSound.soundName}</h3>
				<p className="sound-player-author text-sm">{currentSound.author}</p>
				<div className="sound-player-audio-progress" onClick={handleTimelineClick}>
					<div className="elapsed" style={{ width: `${progress}%` }} />
				</div>
				<div className="sound-player-time text-sm">
					{getTimeText(currentTime)} / {getTimeText(duration)}
				</div>
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
