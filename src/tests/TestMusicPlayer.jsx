import React from "react"
import { render, fireEvent } from "@testing-library/react"
import MusicPlayer from "../components/musicPlayer.jsx"

describe("MusicPlayer", () => {
	it("renders correctly", () => {
		const { getByText, getByAltText } = render(
			<MusicPlayer song={{ id: 1, nametrack: "track1" }} />
		)
		expect(getByAltText("Album cover")).toBeInTheDocument()
		expect(getByText("track1")).toBeInTheDocument()
		expect(getByText("1")).toBeInTheDocument()
	})
})
