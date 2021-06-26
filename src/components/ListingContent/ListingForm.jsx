import React from "react";
import { FontIcons } from "#constants/icons";

export const ListingForm = () => {
    return (
        <React.Fragment>

        	<div className="card p-3 w-100 bg-secondary d-lg-none">
        		<p>
        			Rental Form
        		</p>
        		<a href="https://forms.gle/3zc8gYJpp36vKHhSA" target="_blank" rel="noreferrer" className="btn btn-dark mx-auto">Open in new window</a>
        	</div>

        	<div className="ratio ratio-21x9">
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1-Iw0fnfVFMCX-luz4jAJPGC28WwSvssurBmYB_jcND2cHw/viewform?embedded=true" title="PolyCycles Bike Listing Application">Loading…</iframe>
			</div>
				<a href="https://forms.gle/3zc8gYJpp36vKHhSA" target="_blank" rel="noreferrer" className="text-dark float-end my-3 d-none d-lg-block">
					Open form in new tab {FontIcons.externalLink}
				</a>
			

		</React.Fragment>

    );
}

export default ListingForm;