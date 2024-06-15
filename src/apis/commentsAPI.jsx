import axios from "axios"

const BASE_URL = "http://localhost:8084/api/comment"
// const BASE_URL = "http://127.0.0.1/api/comment"
// const BASE_URL = "http://34.91.167.90/api/comment"

const CommentAPI = {
	getAllCommentsForSong: (idsong) =>
		axios
			.get(BASE_URL, { params: { idsong } })
			.then((response) => response.data),
	postComment: (idsong, useremail, commenttext) =>
		axios
			.post(BASE_URL, {
				idsong: idsong,
				useremail: useremail,
				commenttext: commenttext,
			})
			.then((response) => response.data),
}

export default CommentAPI
