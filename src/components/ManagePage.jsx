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
			const objectName = file.name.replace(/\.[^/.]+$/, "") // Remove the mp3 extension

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

// OLD
// function ManagePage() {
// 	const [file, setFile] = useState(null)

// 	const handleFileChange = (event) => {
// 		setFile(event.target.files[0])
// 	}

// 	const handleUpload = async () => {
// 		if (!file) {
// 			alert("Please select a file.")
// 			return
// 		}

// 		try {
// 			console.log(file)
// 			const bucketName = "heardit_bucket" // Replace with your GCS bucket name
// 			const objectName = file.name

// 			// Fetch the signed URL from your backend
// 			const signedUrl = await ManageAPI.getGoogleSignedURL(
// 				bucketName,
// 				objectName
// 			)
// 			console.log("Signed URL:", signedUrl.response)

// 			ManageAPI.postSong(objectName)
// 				.then((response) => {
// 					console.log(response)
// 				})
// 				.catch((error) => {
// 					console.log(error.message)
// 					alert(
// 						"Creating new advertisement failed! Please, check for any unselected fields!"
// 					)
// 				})

// 			// Use the signed URL to upload the file directly to GCS
// 			await fetch(signedUrl.response, {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": file.type,
// 				},
// 				body: file,
// 			})

// 			console.log("File uploaded successfully.")
// 		} catch (error) {
// 			console.error("Error uploading file:", error)
// 		}
// 	}

// 	return (
// 		<div>
// 			<h1>MP3 File Upload</h1>
// 			<input type="file" onChange={handleFileChange} accept=".mp3" />
// 			<button onClick={handleUpload}>Upload</button>
// 		</div>
// 	)
// }

// export default ManagePage

// const response = await fetch(
// 	"https://www.googleapis.com/upload/storage/v1/b/heardit_bucket/o?uploadType=media&name=" +
// 		file.name,
// 	{
// 		method: "POST",
// 		body: formData,
// 	}
// )

// if (response.ok) {
// 	console.log("File uploaded successfully!")
// } else {
// 	console.error("Upload failed:", response.statusText)
// }
