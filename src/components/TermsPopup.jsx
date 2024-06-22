import React from "react"
import TermsAndConditions from "./TermsAndConditions"

const TermsPopup = ({ onAccept }) => {
	return (
		<div className="popup-overlay">
			<div className="popup-content">
				<TermsAndConditions />
				<button onClick={onAccept} className="accept-button">
					I Accept
				</button>
			</div>
		</div>
	)
}

export default TermsPopup
