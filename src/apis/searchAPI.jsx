import axios from "axios"

// const BASE_URL = "http://localhost:8081/api/search"
// const BASE_URL = "http://127.0.0.1/api/search"
const BASE_URL = "http://34.91.248.136/api/search"

const SearchAPI = {
	getAllSongs: () => axios.get(BASE_URL).then((response) => response.data),
	searchSongs: (queryParams) =>
		axios
			.get(BASE_URL, { params: queryParams })
			.then((response) => response.data),
}

export default SearchAPI
