import React from "react";
import { Link } from "react-router-dom"

export const LikeNothing = () => {
    return ( <React.Fragment>
        <div className="row justify-content-center">
			<h3 className="fw-normal align-self-center py-2 py-md-0">
				Not Seeing Anything You Like?
			</h3>
			<span>
				<Link to="/about#contact" className="btn btn-outline-primary btn-lg">Let Us Know!</Link>
			</span>
		</div> </React.Fragment>
    );
}

export default LikeNothing;