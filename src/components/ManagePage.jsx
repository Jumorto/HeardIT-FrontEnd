import React, { useState } from "react"
import ManageAPI from "../apis/manageAPI"
import { useAuth0 } from "@auth0/auth0-react"

const ManagePage = () => {
	const [file, setFile] = useState(null)
	const [uploading, setUploading] = useState(false)
	const { user } = useAuth0()

	const handleFileChange = (e) => {
		setFile(e.target.files[0])
	}

	const handleUpload = async () => {
		if (!file) return

		setUploading(true)

		const formData = new FormData()
		formData.append("file", file)

		try {
			if (!file) {
				alert("Please select a file.")
				return
			}
			const objectName = file.name.replace(/\.[^/.]+$/, "")

			ManageAPI.postSong(objectName, user.email)
				.then((response) => {
					console.log(response)
				})
				.catch((error) => {
					console.log(error.message)
					alert("Uploading new song failed!")
				})
		} catch (error) {
			console.error("Error uploading file:", error)
		}

		setUploading(false)
	}

	return (
		<div>
			<h1>What will you upload {user.name}?</h1>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleUpload} disabled={uploading}>
				{uploading ? "Uploading..." : "Upload"}
			</button>
		</div>
	)
}

export default ManagePage
