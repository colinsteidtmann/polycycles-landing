import React from "react";
// Components
import {GoogleForm} from "#components";

export const ListingContent = () => {
	return (
		<React.Fragment>
			<div class="row mb-2">
			    <h1 class="text-center fw-light ">
			        New Listing
			    </h1>
			</div>

			<div class="row justify-content-center">
			    <div class="col-10 col-lg-6">
			        <p class="text-start fw-normal">
			            Fill out the form below to list your bike. We'll review it and post it for you. If someone rents the bike, then we'll come out to pick it up and deliver it. When we pick it up, we'll inspect the bike to see if it needs any cleaning, repairs, or tuneups. The owner has to pay for any service work that we do but we'll offer a price match guarantee and give you a detailed report of the work we did. If you don't ride the bike between rentals then there shouldn't be a need for us to do any service work on it.
			        </p>

			        <p class="text-start fw-normal">
			            Fees: Repair/tuneup work + 5% comission
			        </p>
			    </div>
			</div>


			<GoogleForm
				webUrl="https://forms.gle/3zc8gYJpp36vKHhSA"
				iframeUrl="https://docs.google.com/forms/d/e/1FAIpQLSc1-Iw0fnfVFMCX-luz4jAJPGC28WwSvssurBmYB_jcND2cHw/viewform?embedded=true"
				title="Listing Application"
			/>

		</React.Fragment>
	);
}

export default ListingContent;