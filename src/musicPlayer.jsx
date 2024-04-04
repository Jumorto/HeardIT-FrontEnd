// export default MemoizedMusicPlayer
import { useEffect, useState } from "react"
import useSound from "use-sound"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
import { IconContext } from "react-icons"
import ProgressBar from "./progressBar.jsx"

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	//const [seconds, setSeconds] = useState() // current position of the audio in seconds

	// const apiUrl = "http://localhost:8080/api/music/stream" // Your backend API endpoint
	const apiUrl =
		"https://heardit-backend-4lxjpjjbza-ez.a.run.app/api/music/stream" // Your backend API endpoint

	const [play, { pause, duration, position }] = useSound(apiUrl, {
		format: "mp3", // Specify the audio format if needed
	})

	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			// Update the progress bar position every 100 milliseconds
			if (isPlaying && duration) {
				// Calculate the percentage of completion for the progress bar
				const calculatedProgress = (position / duration) * 100
				setProgress(calculatedProgress)
			}
		}, 100)

		// Clear the interval on component unmount
		return () => clearInterval(interval)
	}, [isPlaying, position, duration])

	const playingButton = () => {
		if (isPlaying) {
			pause()
			setIsPlaying(false)
		} else {
			play()
			setIsPlaying(true)
		}
	}

	return (
		<div className="component">
			<h2>Playing Now</h2>
			<img
				className="musicCover"
				src="https://picsum.photos/200/200"
				alt="Album cover"
			/>
			<div>
				<h3 className="title">Music</h3>
				<p className="subTitle">Song</p>
			</div>
			<div>
				<button className="playButton">
					<IconContext.Provider
						value={{ size: "3em", color: "#27AE60" }}
					>
						<BiSkipPrevious />
					</IconContext.Provider>
				</button>
				{!isPlaying ? (
					<button className="playButton" onClick={playingButton}>
						<IconContext.Provider
							value={{ size: "3em", color: "#27AE60" }}
						>
							<AiFillPlayCircle />
						</IconContext.Provider>
					</button>
				) : (
					<button className="playButton" onClick={playingButton}>
						<IconContext.Provider
							value={{ size: "3em", color: "#27AE60" }}
						>
							<AiFillPauseCircle />
						</IconContext.Provider>
					</button>
				)}
				<button className="playButton">
					<IconContext.Provider
						value={{ size: "3em", color: "#27AE60" }}
					>
						<BiSkipNext />
					</IconContext.Provider>
				</button>
			</div>
			<ProgressBar progress={progress} />
		</div>
	)
}

export default MusicPlayer
