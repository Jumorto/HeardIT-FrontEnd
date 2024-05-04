import { useEffect, useState } from "react"
import useSound from "use-sound"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"
import { IconContext } from "react-icons"

const MusicPlayer = ({ song }) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const apiUrl = "http://localhost:8080/api/music/stream/" // + song.id // Your backend API endpoint /2
	// const apiUrl =
	// 	"https://heardit-backend-4lxjpjjbza-ez.a.run.app/api/music/stream" // Your backend API endpoint

	const [play, { pause, duration, position }] = useSound(apiUrl, {
		format: "mp3", // Specify the audio format if needed
	})

	console.log(play)
	console.log(song)

	useEffect(() => {
		// Clear the interval on component unmount
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
		<div className="music-player-container">
			<div className="music-player-content">
				<img
					className="musicCover"
					src="https://picsum.photos/200/200"
					alt="Album cover"
				/>
				<div>
					<h3 className="title">{song.id}</h3>
					<h3 className="title">{song.nametrack}</h3>
				</div>
				<div>
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
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer
