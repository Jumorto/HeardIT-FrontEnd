import { useState } from "react"

const MusicPlayer = ({ song }) => {
	const [isPlaying] = useState(false)

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
					<audio
						controls
						autoPlay={isPlaying}
						controlsList="nodownload"
					>
						<source
							src={
								"https://storage.googleapis.com/heardit-bucket-2/" +
								song.nametrack +
								".mp3"
							}
							type="audio/mpeg"
						/>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer
