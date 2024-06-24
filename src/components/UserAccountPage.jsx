import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import RabbitAPI from "../apis/rabbitAPI"

const UserAccount = () => {
	const { user, logout } = useAuth0()

	const handleDeleteAccount = () => {
		RabbitAPI.deleteSongs(user.email)
			.then((response) => {
				console.log(response)
				alert("Account deleted successfully!")
			})
			.catch((error) => {
				console.log(error.message)
				alert("Deleting account failed")
			})
	}

	return (
		<div>
			<h1>My Account</h1>
			<div>
				<h3>Name: {user.name}</h3>
				<h3>Email: {user.email}</h3>
			</div>
			<button onClick={handleDeleteAccount}>Delete Account</button>
		</div>
	)
}

export default UserAccount
