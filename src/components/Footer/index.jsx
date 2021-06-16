import React from "react";
import {Link} from "react-router-dom";
// Components
import {Share, Subscribe, IconList} from "#components";
// Other impoerts
import {FontIcons} from "#constants"

export const Footer = (props) => {
	return (
		<>	
			<div class="row pt-3 justify-content-center">
				<div class="col-3">
					<p class="text-center fs-5 fw-normal mb-0">Share!</p>
					<Share />
				</div>
				<div class="col-3">
					<p class="text-center fs-5 fw-normal mb-2">Subscribe to stay updated</p>
					<Subscribe/>
				</div>
				
				
			</div>
			
			<footer className="pt-5">
				<div className="container-fluid py-5 bg-dark">

					<div className="row mx-4">

						<Link to="/" class="navbar-brand text-light text-start mb-3">PolyCycles</Link>

						<div className="col-2 mb-3 text-start">
							<span class="fw-light text-secondary">Product</span>							
							<div class="navbar-nav">
								<Link class="nav-link text-light py-0" to="/kits">Kits</Link>
								<Link class="nav-link text-light py-0" to="/updates">Updates</Link>
							</div>
						</div>

						<div className="col-2 mb-3 text-start">
							<span class="fw-light text-secondary">Company</span>							
							<div class="navbar-nav">
								<Link class="nav-link text-light py-0" to="/kits">About</Link>
								<Link class="nav-link text-light py-0" to="/up">Support</Link>
							</div>
						</div>

						<div className="col-2 mb-3 text-start">
							<span class="fw-light text-secondary">Socials</span>
							<div class="navbar-nav text-light">
								<Link class="nav-link text-light py-0" to="/kits">{FontIcons.facebookSquare} Facebook</Link>
								<Link class="nav-link text-light py-0" to="/kits">{FontIcons.twitterSquare} Twitter</Link>
								<Link class="nav-link text-light py-0" to="/kits">{FontIcons.discord} Discord</Link>
							</div>
						</div>

						<div className="col-2 mb-3 text-start">
							<span class="fw-light text-secondary">Help</span>
							<div class="navbar-nav text-light">
								<a class="nav-link text-light py-0" href="mailto:friends@polycycles.com">{FontIcons.envelope} friends@polycycles.com</a>
							</div>
						</div>

						<div className="col-3 mb-3 ms-auto text-start">
							<p class="fw-light text-secondary">Get Updates</p>
							<Subscribe />
							<p class="fw-light text-secondary pt-3 mb-0">Share on social media</p>
							<Share />
						</div>


						<hr class="text-light mt-3"/>
						<p class="text-end text-light mb-0">
							&copy; {new Date().getFullYear()}
						</p>
					</div>
				</div>
			</footer>

		</>
	);
};

export default Footer;