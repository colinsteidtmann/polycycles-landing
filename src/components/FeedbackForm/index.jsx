import React from "react";
import { FontIcons } from "#constants";

export const FeedbackForm = () => {
    return (
        <React.Fragment>

			<div class="card p-3 w-100 bg-warning d-lg-none">
				<p>
					Please fill out our feedback form, we need it to validate our business model
				</p>
				<a href="https://forms.gle/WwU6kV7RfGMik88h9" target="_blank" class="btn btn-primary mx-auto">Form is here</a>
			</div>

			<div className="ratio ratio-21x9 d-none d-lg-block ">
			  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMc2zwwiNfCMJ-Lp3qtAgc8ie3_cgzntwkjLsIDY1sho3H4Q/viewform?embedded=true" title="PolyCycles Feedback Form">Loading…</iframe>
			</div>

			<a href="https://forms.gle/WwU6kV7RfGMik88h9" target="_blank" class="text-primary float-start my-3">
				Open form in new tab {FontIcons.externalLink}
			</a>
		</React.Fragment>

    );
}

export default FeedbackForm;