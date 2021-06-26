import React from "react";
import {Link} from "react-router-dom";
// Imports
import {b1} from "#images/Backgrounds";

export const Banner = () => {
	return (
		<React.Fragment>
			<div class="row justify-content-center my-4 mx-2 mx-md-4">


			    <div class="col-12 col-md-11 col-lg-6 text-start">

			        <h1 class="display-2">
			            Bike Share and Demos
			        </h1>

			        <h5 class="fw-light my-4">
			            Make money on bikes you don't ride. Rent bikes that you want to ride. Try bikes before buying.
			        </h5>

			        <div class="row my-4">
			            <div class="col-6 col-sm-4">
			                <a href="#learn" class="btn btn-outline-secondary btn-xl-lg">Learn more</a>
			            </div>
			            <div class="col-6 col-sm-4">
			                <Link to="/bikes" class="btn btn-dark btn-xl-lg">See bikes</Link>
			            </div>
			        </div>

			    </div>

			    <div class="col-12 col-md-11 col-lg-6 my-4">
			        <img src={b1} class="img-fluid" />
			    </div>

			</div>
		</React.Fragment>
	);
};

export default Banner;