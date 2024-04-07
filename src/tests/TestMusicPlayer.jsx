import React from "react"
import { render, fireEvent } from "@testing-library/react"
import MusicPlayer from "../musicPlayer.jsx"

describe("MusicPlayer", () => {
	it("renders correctly", () => {
		const { getByText, getByAltText } = render(<MusicPlayer />)
		expect(getByText("Playing Now")).toBeInTheDocument()
		expect(getByAltText("Album cover")).toBeInTheDocument()
		expect(getByText("Music")).toBeInTheDocument()
		expect(getByText("Song")).toBeInTheDocument()
	})
})
