import React from "react";
import { Link } from "react-router-dom";
// components
// custom imports
import logo from "#images/Brand/logo_transparent_bike.png";

const TempBlogAlert = () => {
	return (
		<div className="alert alert-dismissible alert-secondary " role="alert">
		  New blog posted! 
			<a 
				href="https://colinsteidtmann.medium.com/can-bikes-be-investable-assets-cb4e92483b10"
				className="alert-link ms-2"
				target="_blank"
				rel="noreferrer"

			>
				Can Bikes Be Investible Assets?

			</a>.
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	);
}

export const Navbar = (props) => {
    return (
        <div className="mx-0 px-sm-3">
        	<TempBlogAlert />
			{/* ==== Main Navbar ==== */}
			<nav className="navbar navbar-light bg-light">
			  <div className="container-fluid ">
			    {props.children}
			  </div>
			</nav>

		{/* ==== Location ==== */}
			<div className="row px-sm-2 d-none d-sm-block">
				<div className="col d-inline-flex">
					<p className="fs-6 fw-light">
						<i className="fas fa-map-marker-alt text-primary me-2 fa-sm"></i>
						<em>Berkeley, CA, est. 2021</em> 
					</p>
					
				</div>
			</div>
		</div>
    )

}



export const Header = () => {
    return ( <React.Fragment>

        <Navbar >

				<div className="col-12 col-sm-6 text-sm-start"> 
					<Link className="navbar-brand me-0" to="/">
						PolyCycles
						<img src={logo} alt="Company logo" className="ms-2" style={{"width":"2rem"}}/>
					</Link>
				</div>

				<div className="col-12 col-sm-6 mt-3 mt-sm-0">
					<div className="d-flex justify-content-center justify-content-sm-end">
						<Link className="btn btn-outline-dark d-none d-sm-block mx-sm-2 mx-lg-3" to="/newListing">List a Bike</Link>
						<Link className="nav-link text-dark d-block d-sm-none mx-sm-2 mx-lg-3" to="/newListing">List a Bike</Link>
						<Link className="nav-link text-dark px-sm-2 px-lg-3" to="/bikes">View Bikes</Link>
						<Link className="nav-link text-dark px-sm-2 px-lg-3" to="/help">Help</Link>

					</div>
				</div>
			</Navbar>



        </React.Fragment>
    );
}

export default Header;