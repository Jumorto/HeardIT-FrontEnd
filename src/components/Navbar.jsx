import React from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

function NavBar() {
	const { isAuthenticated } = useAuth0()

	return (
		<header>
			<div className="sidebar">
				<ul>
					<li>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					{isAuthenticated ? (
						<div>
							<li> _</li>
							<li>
								<Link to="/manage" className="nav-link">
									Manage
								</Link>
							</li>
							<li> _</li>
							<li>
								<Link to="/account" className="nav-link">
									Account
								</Link>
							</li>
						</div>
					) : (
						<li></li>
					)}

					<li> _</li>
					<li>
						{isAuthenticated ? <LogoutButton /> : <LoginButton />}
					</li>
				</ul>
			</div>
		</header>
	)
}

export default NavBar
