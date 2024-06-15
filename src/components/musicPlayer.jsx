import { useState, useEffect, React } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import CommentAPI from "../apis/commentsAPI.jsx"

const MusicPlayer = ({ song }) => {
	const [isPlaying] = useState(false)
	const { user, isAuthenticated } = useAuth0()
	const [comments, setComments] = useState([])
	const [newComment, setNewComment] = useState("")
	const [showComments, setShowComments] = useState(false)

	// Fetch comments for the song
	useEffect(() => {
		if (showComments) {
			CommentAPI.getAllCommentsForSong(song.id)
				.then((fetchedComments) => {
					setComments(fetchedComments.comments)
					console.log(fetchedComments.comments)
				})
				.catch((error) =>
					console.error("Error fetching comments:", error)
				)
		}
	}, [showComments, song.id])

	// Post a new comment
	const handleAddComment = () => {
		if (newComment.trim() && isAuthenticated) {
			CommentAPI.postComment(song.id, user.email, newComment)
				.then((postedComment) => {
					setComments([...comments, postedComment])
					setNewComment("")
				})
				.catch((error) =>
					console.error("Error posting comment:", error)
				)
		}
	}

	// Format date to d/m/y
	const formatDate = (dateString) => {
		const options = { day: "numeric", month: "numeric", year: "numeric" }
		return new Date(dateString).toLocaleDateString(undefined, options)
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
				<div className="comments-section">
					<button onClick={() => setShowComments(!showComments)}>
						{showComments ? "Hide Comments" : "Show Comments"}
					</button>
					{showComments && (
						<div className="comments-container">
							<div className="comments-list">
								{comments.map((comment) => (
									<div key={comment.id} className="comment">
										<span className="comment-text">
											{comment.useremail} :
											<b>{comment.commenttext}</b>
										</span>
										<span className="comment-date">
											{formatDate(comment.commentdate)}
										</span>
									</div>
								))}
							</div>
							{isAuthenticated && (
								<div className="add-comment">
									<textarea
										value={newComment}
										onChange={(e) =>
											setNewComment(e.target.value)
										}
										placeholder="Write a comment..."
									></textarea>
									<button onClick={handleAddComment}>
										Add Comment
									</button>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer
