import axios from "axios"

// const BASE_URL = "http://localhost:8082/api/manage"
// const BASE_URL = "http://127.0.0.1/api/manage"
const BASE_URL = "http://34.91.167.90/api/manage"

const ManageAPI = {
	postSong: (nameTrack, useremail) =>
		axios
			.post(BASE_URL, { nameTrack: nameTrack, useremail: useremail })
			.then((response) => response.data),
}

export default ManageAPI
