import React from "react";
import { Link } from "react-router-dom";
// Components
import { ShareButtons, Subscribe } from "#components";
// Other impoerts
import { FontIcons } from "#constants/icons"

export const Footer = (props) => {
    return ( 
    <React.Fragment>
       <footer >
        <div className="container-fluid py-5 bg-dark">

					<div className="row mx-0 mx-xl-4">

						<Link to="/" className="navbar-brand text-light text-start mb-3">PolyCycles</Link>

						<div className="col-12  col-lg-4 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Product</span>							
							<div className="navbar-nav">
								<Link className="nav-link text-light py-0" to="/newListing">List a bike</Link>
								<Link className="nav-link text-light py-0" to="/bikes">View bikes</Link>
							</div>
						</div>

						<div className="col-12  col-lg-4 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Company</span>							
							<div className="navbar-nav">
								<Link className="nav-link text-light py-0" to="/help">Help</Link>
								<Link className="nav-link text-light py-0" to="/terms">Terms and conditions</Link>
							</div>
						</div>

						<div className="col-12  col-lg-4 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Socials</span>
							<div className="navbar-nav text-light">
								<a 
									className="nav-link text-light py-0" 
									href="https://twitter.com/polycycles"
									target="_blank" 
									rel="noreferrer"
								>
									{FontIcons.facebookSquare} Facebook
								</a>
								<a 
									className="nav-link text-light py-0" 
									href="https://twitter.com/polycycles"
									target="_blank" 
									rel="noreferrer"
								>
									{FontIcons.twitterSquare} Twitter
								</a>
								<a 
									className="nav-link text-light py-0" 
									href="https://discord.gg/skcfCKFeRh"
									target="_blank" 
									rel="noreferrer"
								>
									{FontIcons.discord} Discord
								</a>
							</div>
						</div>

						<div className="col-12  col-lg-6 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Help</span>
							<div className="navbar-nav text-light">
								<a className="nav-link text-light py-0" href="mailto:friends@polycycles.com">{FontIcons.envelope} friends@polycycles.com</a>
							</div>
						</div>

						<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-auto text-start">
							<p className="fw-light text-secondary">Get Updates</p>
							<Subscribe />
							<p className="fw-light text-secondary pt-3 mb-0">Share on social media</p>
							<ShareButtons color="text-light" />
						</div>


						<hr className="text-light mt-3"/>
						<p className="text-end text-light mb-0">
							&copy; {new Date().getFullYear()}
						</p>
					</div>
				</div> <
        /footer>

        </React.Fragment>
    );
};

export default Footer;