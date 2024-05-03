import React from "react"
import { render, fireEvent } from "@testing-library/react"
import MusicPlayer from "../components/musicPlayer.jsx"

describe("MusicPlayer", () => {
	it("renders correctly", () => {
		const { getByText, getByAltText } = render(<MusicPlayer />)
		expect(getByAltText("Album cover")).toBeInTheDocument()
		expect(getByText("Music")).toBeInTheDocument()
		expect(getByText("Song")).toBeInTheDocument()
	})
})
