import React from "react";
import {Link} from "react-router-dom";
// Imports
import {b1} from "#images/Backgrounds";

export const Banner = () => {
	return (
		<React.Fragment>
			<div class="row justify-content-center pt-3 pb-4 py-lg-5 mx-0 mx-lg-3">


			    <div class="col-12 col-md-11 col-lg-6 text-start mx-auto px-3 px-lg-5">

			        <h1 class="display-2">
			            Bike Share and Demos
			        </h1>

			        <h5 class="fw-light py-2 py-lg-4">
			            Make money on bikes you don't ride. Rent bikes that you want to ride. Try bikes before buying.
			        </h5>

			        <div class="row py-3 py-lg-auto">
			            <div class="col-6 col-lg-4">
			                <a href="#learn" class="btn btn-outline-secondary btn-lg-lg">Learn more</a>
			            </div>
			            <div class="col-6 col-lg-4">
			                <Link to="/bikes" class="btn btn-dark btn-lg-lg">See bikes</Link>
			            </div>
			        </div>

			    </div>

			    <div class="col-12 col-md-11 col-lg-6 mx-auto pt-4 mt-lg-0">
			        <img src={b1} class="img-fluid" />
			    </div>

			</div>
		</React.Fragment>
	);
};

export default Banner;