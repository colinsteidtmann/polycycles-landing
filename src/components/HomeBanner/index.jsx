import React from "react";
import {Link} from "react-router-dom";
// Components
// Hooks
// Other imports

export const HomeBanner = (props) => {
	return (
		<>
			<div class="py-5 px-5 bg-home1-image" style={{"min-height":"75vh"}}>
				<div class="col-6 text-light text-center mx-auto">
					<h1 class="display-4 fw-normal py-2 mb-2">
						New Bike Subscription Service
					</h1>
					<p class="lead fw-normal py-2 mb-2">
						<em>Bikes can be difficult. We know. </em>
					</p>
					<p class="lead fw-light pt-2 ">
						They cost thousands of dollars to buy, additional hundreds each year to maintain, and 
						can take hours to time clean and get repaired.
					</p>
					<p class="lead fw-light pb-2 mb-2">
						Let's make that easier. We want to create a bike subscription service &#8212; here's our plan: 
					</p>
				</div>

				<div class="row justify-content-center py-3">
					<div class="col-2">
						<a href="#learn" type="button" class="btn btn-outline-light">Learn more</a>
					</div>
					<div class="col-2">
						<Link to="/kits" type="button" class="btn btn-primary">View the kits</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeBanner;