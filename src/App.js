import React, { useState, useEffect } from "react"
import NavBar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import "./App.css"
import ManagePage from "./components/ManagePage.jsx"
import UserAccount from "./components/UserAccountPage.jsx"
import TermsPopup from "./components/TermsPopup.jsx"

function App() {
	const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)

	useEffect(() => {
		// Check if user has already accepted the terms
		const accepted = localStorage.getItem("hasAcceptedTerms")
		setHasAcceptedTerms(accepted === "true")
	}, [])

	const handleAcceptTerms = () => {
		localStorage.setItem("hasAcceptedTerms", "true")
		setHasAcceptedTerms(true)
	}

	return (
		<div>
			{!hasAcceptedTerms && <TermsPopup onAccept={handleAcceptTerms} />}
			{hasAcceptedTerms && (
				<Auth0Provider
					domain="dev-1g5lgfa6r3y4uof7.us.auth0.com"
					clientId="IIPLXKGiRDxyjmhu7jZHunTWkHJ1ij3T"
					authorizationParams={{
						redirect_uri: window.location.origin,
					}}
				>
					<Router>
						<NavBar />
						<div className="content">
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route
									path="/manage"
									element={<ManagePage />}
								/>
								<Route
									path="/account"
									element={<UserAccount />}
								/>
							</Routes>
						</div>
					</Router>
				</Auth0Provider>
			)}
		</div>
	)
}

export default App
