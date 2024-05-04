import React, { useState, useEffect } from "react"
import MemoizedMusicPlayer from "./musicPlayer.jsx"
import Card from "./Card.jsx"
import SearchAPI from "../apis/searchAPI.jsx"

const initialState = {
	songs: [],
	isFetching: false,
	hasError: false,
}

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SONGS-REQUEST":
			return {
				...state,
				isFetching: true,
				hasError: false,
			}
		case "FETCH_SONGS_SUCCESS":
			//console.log(action.payload);
			return {
				...state,
				isFetching: false,
				songs: action.payload.songs,
			}
		case "FETCH_SONGS_FAILURE":
			return {
				...state,
				isFetching: false,
				hasError: true,
			}
		default:
			return state
	}
}

const HomePage = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	React.useEffect(() => {
		console.log("Starting dispatching!")
		dispatch({ type: "FETCH_SONGS-REQUEST" })
		SearchAPI.getAllSongs()
			.then((response) => {
				console.log(response)
				dispatch({
					type: "FETCH_SONGS_SUCCESS",
					payload: response,
				})
			})
			.catch((error) => {
				console.log(error)
				dispatch({
					type: "FETCH_SONGS_FAILURE",
				})
			})
	}, [])

	return (
		<div className="home-page">
			<div className="card-container">
				{state.isFetching ? (
					<span className="loader"></span>
				) : state.hasError ? (
					<span className="error">
						Error has occured when displaying the songs. Sorry for
						the inconvenience!
					</span>
				) : (
					<>
						{state.songs.length > 0 ? (
							state.songs.map((songs) => (
								<Card key={songs.id}>
									<MemoizedMusicPlayer song={songs} />
								</Card>
							))
						) : (
							<span className="noAdds">
								Sorry we dont have any songs here...
							</span>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default HomePage
