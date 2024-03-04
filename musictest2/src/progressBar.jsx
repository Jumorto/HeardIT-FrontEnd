import React from "react"

const ProgressBar = ({ progress }) => {
	return (
		<div className="progressBar">
			<div className="progress" style={{ width: `${progress}%` }}></div>
		</div>
	)
}

export default ProgressBar
