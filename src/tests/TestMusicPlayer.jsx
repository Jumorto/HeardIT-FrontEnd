import React from "react"
import { render, fireEvent } from "@testing-library/react"
import MusicPlayer from "../components/musicPlayer.jsx"

describe("MusicPlayer", () => {
	it("renders correctly", () => {
		const { getByText, getByAltText } = render(
			<MusicPlayer
				song={{ id: 1, nametrack: "Nine Lives - Unicorn Heads" }}
			/>
		)
		expect(getByAltText("Album cover")).toBeInTheDocument()
		expect(getByText("Nine Lives - Unicorn Heads")).toBeInTheDocument()
		expect(getByText("1")).toBeInTheDocument()
	})
})
