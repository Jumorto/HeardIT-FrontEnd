import React from "react"
import NavBar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import "./App.css"

function App() {
	return (
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
					</Routes>
				</div>
			</Router>
		</Auth0Provider>
	)
}

export default App
