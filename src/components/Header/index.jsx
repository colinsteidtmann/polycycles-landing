import React from "react";
import {Link} from "react-router-dom";
// components
// custom imports



export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-light bg-light mx-3">
		  <div className="container-fluid">
		    {props.children}
		  </div>
		</nav>
	)

}



export const Header = () => {
	return(
		<>
{/*			<Navbar> 
				<div class="row ">
					
					<div class="col d-inline-flex align-items-flex-end">
						<Link className="navbar-brand me-3" to="/">PolyCycles</Link>
					
						<p class="fs-6 mb-1">
							<i class="fas fa-map-marker-alt text-info me-1 fa-sm"></i>
							<em>Berkeley, CA, est. 2021</em> 
						</p>
						
					</div>
				</div>
				
				<div className="d-flex">
					<Link className="nav-link text-dark ms-4" to="/kits">Kits</Link>
					<Link className="nav-link text-dark ms-4" to="/about">About</Link>
					<Link className="nav-link text-dark ms-4" to="/support">Support us</Link>
				</div>
			</Navbar>*/}

			<Navbar> 
				<Link className="navbar-brand me-3" to="/">PolyCycles</Link>
				<div className="d-flex">
					<Link className="nav-link text-dark ms-4" to="/kits">Kits</Link>
					<Link className="nav-link text-dark ms-4" to="/about">About</Link>
					<Link className="nav-link text-dark ms-4" to="/support">Support us</Link>
				</div>
			</Navbar>
			<div class="row mx-3">
				<div class="col d-inline-flex ">
					<p class="fs-6 fw-light">
						<i class="fas fa-map-marker-alt text-info me-2 fa-sm"></i>
						<em>Berkeley, CA, est. 2021</em> 
					</p>
					
				</div>
			</div>


		</>
	);
}

export default Header;