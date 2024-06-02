import axios from "axios"

const BASE_URL = "http://localhost:8083/api/rabbitmq"
// const BASE_URL = "http://34.91.167.90/api/manage"

const RabbitAPI = {
	deleteSongs: (useremail) =>
		axios
			.delete(BASE_URL + "/alluseremail", { params: { useremail } })
			.then((response) => response.data),
}

export default RabbitAPI
