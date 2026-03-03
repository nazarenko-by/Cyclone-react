export const getTimeText = (seconds) => {
	const hours = Math.floor(seconds / 3600)
	const mins = Math.floor((seconds % 3600) / 60)
	const secs = Math.floor(seconds % 60)

	let timeText = ""
	if (hours > 0) {
		timeText += `${hours}:`
	}
	timeText += `${mins.toString().padStart(2, "0")}:`
	timeText += `${secs.toString().padStart(2, "0")}`

	return timeText
}
