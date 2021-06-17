import React from "react";
import { Link } from "react-router-dom";
// Components
// Hooks
// Other imports

export const HomeBanner = (props) => {
    return ( <React.Fragment>
        <div className="bg-home1-2-image py-5 px-1 px-lg-5 " style={{"minHeight":"75vh"}}>
				<div className="text-light text-center mx-auto col-11 col-lg-6 ">
					<h1 className="fw-normal display-6 display-lg-4 py-2 mb-2">
						New Bike Subscription Service
					</h1>
					<p className="lead fs-6 fw-normal py-2 mb-2">
						<em>Bikes can be difficult. We know. </em>
					</p>
					<p className="lead fs-6 fw-light pt-2 ">
						They cost thousands of dollars to buy, additional hundreds each year to maintain, and 
						can take hours to time clean and get repaired.
					</p>
					<p className="lead fs-5 fw-light pb-2 mb-2">
						Let's make that easier. We want to create a bike subscription service &#8212; here's our plan: 
					</p>
				</div>

				<div className="row justify-content-center py-3">
					<div className="col-5 col-md-3 col-xl-2">
						<a href="#learn"  className="btn btn-outline-light">Learn more</a>
					</div>
					<div className="col-5 col-md-3 col-xl-2">
						<Link to="/kits" className="btn btn-primary">View the kits</Link>
					</div>
				</div>
			</div> </React.Fragment>
    );
}

export default HomeBanner;