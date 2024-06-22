import React from "react"
import { render, screen } from "@testing-library/react"
import { useAuth0 } from "@auth0/auth0-react"
import Profile from "../components/Profile"

// Mock the useAuth0 hook
jest.mock("@auth0/auth0-react")

describe("Profile", () => {
	it("renders loading state", () => {
		// Mock the useAuth0 hook to return loading state
		useAuth0.mockReturnValue({
			isLoading: true,
			isAuthenticated: false,
			user: null,
		})

		render(<Profile />)
		expect(screen.getByText("Loading ...")).not.toBeNull()
	})

	it("renders authenticated user", () => {
		// Mock the useAuth0 hook to return authenticated user
		useAuth0.mockReturnValue({
			isLoading: false,
			isAuthenticated: true,
			user: {
				name: "John Doe",
				email: "john.doe@example.com",
				picture: "http://example.com/john.jpg",
			},
		})

		render(<Profile />)
		expect(screen.getByAltText("John Doe")).not.toBeNull()
		expect(screen.getByText("John Doe")).not.toBeNull()
		expect(screen.getByText("john.doe@example.com")).not.toBeNull()
	})

	it("does not render when not authenticated", () => {
		// Mock the useAuth0 hook to return not authenticated
		useAuth0.mockReturnValue({
			isLoading: false,
			isAuthenticated: false,
			user: null,
		})

		render(<Profile />)
		expect(screen.queryByAltText(/.+/)).toBeNull()
		expect(screen.queryByText(/.+/)).toBeNull()
	})
})
