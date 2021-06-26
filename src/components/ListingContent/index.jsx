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
			            Fill out the form below to list your bike. We'll then review it, see the bike in person, take photos and collect details on its components, wear, and tear, and then we'll post it on the website. If someone rents the bike, we'll contact you to get your approval. When we come out to pick the bike the up, we'll inspect it to see if it needs any cleaning, repairs, or tuneups. The owner has to pay us for any service work that we do but we'll offer a price match guarantee with the surrounding bike shops and we'll give you a transparent report of the work we did. If you don't ride the bike between rentals then there shouldn't be a need for us to do any service work on it.
			        </p>

			        <p class="text-start fw-normal">
			            Fees: Repair/tuneup work + 5-10% comission
			        </p>
			    </div>
			</div>


			<GoogleForm
				webUrl="https://forms.gle/6TXf4nRzfk8qLgMw5"
				iframeUrl="https://docs.google.com/forms/d/e/1FAIpQLSc1-Iw0fnfVFMCX-luz4jAJPGC28WwSvssurBmYB_jcND2cHw/viewform?embedded=true"
				title="Listing Application"
			/>

		</React.Fragment>
	);
}

export default ListingContent;