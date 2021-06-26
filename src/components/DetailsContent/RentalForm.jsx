import React from "react";
import { FontIcons } from "#constants/icons";

export const RentalForm = () => {
    return (
        <React.Fragment>

        	<div className="card p-3 w-100 bg-secondary d-lg-none">
        		<p>
        			Rental Form
        		</p>
        		<a href="https://forms.gle/mU6DhNVxuE14HYXb6" target="_blank" rel="noreferrer" className="btn btn-dark mx-auto">Open in new window</a>
        	</div>

        	<div className="ratio ratio-21x9">
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddG5jzhsj4jOr7ElDy6XPjBSf3qv3V4SqkuyawiVjG34WOHA/viewform?embedded=true" title="PolyCycles Bike Rental Application">Loading…</iframe>
			</div>
				<a href="https://forms.gle/mU6DhNVxuE14HYXb6" target="_blank" rel="noreferrer" className="text-dark float-end my-3 d-none d-lg-block">
					Open form in new tab {FontIcons.externalLink}
				</a>
			

		</React.Fragment>

    );
}

export default RentalForm;