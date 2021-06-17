import React from "react";
import { Link } from "react-router-dom";
// Components
import { Share, Subscribe, IconList } from "#components";
// Other impoerts
import { FontIcons } from "#constants"

export const Footer = (props) => {
    return ( <React.Fragment>
        <div className="row justify-content-center gy-3 gy-md-0 mt-5 mx-md-3 ">
				<div className="col-10 col-md-5">
					<p className="text-center fs-5 fw-normal mb-0">Share!</p>
					<Share />
				</div>
				<div className="col-10 col-md-5">
					<p className="text-center fs-5 fw-normal mb-2">Subscribe to stay updated</p>
					<Subscribe/>
				</div>
				
				
			</div>

        <
        footer className = "pt-5" >
        <div className="container-fluid py-5 bg-dark">

					<div className="row mx-0 mx-xl-4">

						<Link to="/" className="navbar-brand text-light text-start mb-3">PolyCycles</Link>

						<div className="col-12  col-lg-4 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Product</span>							
							<div className="navbar-nav">
								<Link className="nav-link text-light py-0" to="/kits">Kits</Link>
								<Link className="nav-link text-light py-0" to="/updates">Updates</Link>
							</div>
						</div>

						<div className="col-12  col-lg-4 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Company</span>							
							<div className="navbar-nav">
								<Link className="nav-link text-light py-0" to="/kits">About</Link>
								<Link className="nav-link text-light py-0" to="/up">Support</Link>
							</div>
						</div>

						<div className="col-12  col-lg-4 col-xl-2 mb-3 text-start">
							<span className="fw-light text-secondary">Socials</span>
							<div className="navbar-nav text-light">
								<Link className="nav-link text-light py-0" to="/kits">{FontIcons.facebookSquare} Facebook</Link>
								<Link className="nav-link text-light py-0" to="/kits">{FontIcons.twitterSquare} Twitter</Link>
								<Link className="nav-link text-light py-0" to="/kits">{FontIcons.discord} Discord</Link>
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
							<Share />
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