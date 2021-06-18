import React from "react";
import { Link } from "react-router-dom";
// components
// custom imports
import logo from "#images/Brand/logo_transparent_bike.png";


export const Navbar = (props) => {
    return (
        <div className="mx-0 mx-sm-3">
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

        <Navbar>

				<div className="col-12 col-sm-6 text-sm-start"> 
					<Link className="navbar-brand me-0" to="/">
						PolyCycles
						<img src={logo} alt="Company logo" className="ms-2" style={{"width":"2rem"}}/>
					</Link>
				</div>

				<div className="col-12 col-sm-6 mt-3 mt-sm-0">
					<div className="d-flex justify-content-center justify-content-sm-end">
						<Link className="nav-link text-dark px-sm-2 px-lg-3" to="/kits">Kits</Link>
						<Link className="nav-link text-dark px-sm-2 px-lg-3" to="/about">About</Link>
						<Link className="nav-link text-dark px-sm-2 px-lg-3" to="/support">Support us</Link>
					</div>
				</div>
			</Navbar>



        </React.Fragment>
    );
}

export default Header;