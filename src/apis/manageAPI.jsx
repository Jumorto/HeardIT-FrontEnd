import axios from "axios"

const BASE_URL = "http://localhost:8082/api/manage"
// const BASE_URL = "http://34.91.167.90/api/manage"

const ManageAPI = {
	postSong: (nameTrack, useremail) =>
		axios
			.post(BASE_URL, { nameTrack: nameTrack, useremail: useremail })
			.then((response) => response.data),
	deleteSongs: (useremail) =>
		axios
			.delete(BASE_URL + "/alluseremail", { params: { useremail } })
			.then((response) => response.data),
	// getGoogleSignedURL: (bucketName, objectName) =>
	// 	axios
	// 		.get(BASE_URL + "/generateSignedUrl", {
	// 			params: {
	// 				bucketName,
	// 				objectName,
	// 			},
	// 		})
	// 		.then((response) => response.data),
}

export default ManageAPI
