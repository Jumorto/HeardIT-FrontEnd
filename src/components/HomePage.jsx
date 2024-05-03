import React from "react"
import MemoizedMusicPlayer from "./musicPlayer.jsx"
import Card from "./Card.jsx"

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="card-container">
				<Card>
					<MemoizedMusicPlayer />
				</Card>
			</div>
		</div>
	)
}

export default HomePage
