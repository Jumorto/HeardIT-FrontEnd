import React, { useState } from "react"

const TermsAndConditions = () => {
	const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

	const togglePrivacyPolicy = () => {
		setShowPrivacyPolicy(!showPrivacyPolicy)
	}

	return (
		<div>
			<h2>Terms and Conditions</h2>
			<p>
				Please read and accept our terms and conditions to continue
				using our service.
			</p>
			<h3>Privacy Policy and GDPR Compliance</h3>
			<p>
				We are committed to protecting your personal data and complying
				with the General Data Protection Regulation (GDPR).
			</p>
			<p>
				By using our service, you consent to the collection and use of
				your personal information as described in our Privacy Policy. We
				collect data to improve our service, including usage patterns
				and preferences, and we may share this information with third
				parties as detailed in our policy.
			</p>
			<button
				onClick={togglePrivacyPolicy}
				className="privacy-policy-toggle"
			>
				{showPrivacyPolicy
					? "Hide Privacy Policy"
					: "Show Privacy Policy"}
			</button>
			{showPrivacyPolicy && (
				<div className="privacy-policy-content">
					<h4>Privacy Policy</h4>
					<p>
						Your privacy is important to us. It is our policy to
						respect your privacy regarding any information we may
						collect from you across our website, and other sites we
						own and operate.
					</p>
					<p>
						We only ask for personal information when we truly need
						it to provide a service to you. We collect it by fair
						and lawful means, with your knowledge and consent. We
						also let you know why we’re collecting it and how it
						will be used.
					</p>
					<p>
						We only retain collected information for as long as
						necessary to provide you with your requested service.
						What data we store, we’ll protect within commercially
						acceptable means to prevent loss and theft, as well as
						unauthorized access, disclosure, copying, use, or
						modification.
					</p>
					<p>
						We don’t share any personally identifying information
						publicly or with third parties, except when required to
						by law.
					</p>
					<p>
						Our website may link to external sites that are not
						operated by us. Please be aware that we have no control
						over the content and practices of these sites, and
						cannot accept responsibility or liability for their
						respective privacy policies.
					</p>
					<p>
						You are free to refuse our request for your personal
						information, with the understanding that we may be
						unable to provide you with some of your desired
						services.
					</p>
					<p>
						Your continued use of our website will be regarded as
						acceptance of our practices around privacy and personal
						information. If you have any questions about how we
						handle user data and personal information, feel free to
						contact us.
					</p>
					<p>This policy is effective as of 1 June 2024.</p>
				</div>
			)}
		</div>
	)
}

export default TermsAndConditions
