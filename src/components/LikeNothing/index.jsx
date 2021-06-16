import React from "react";
import {Link} from "react-router-dom"

export const LikeNothing = () => {
	return (
		<>
		<div class="row pt-5 justify-content-center mb-5">
			<h3 class="fw-normal align-self-center py-2">
				Not Seeing Anything You Like?
			</h3>
			<span>
				<Link to="/about#contact" type="button" class="btn btn-outline-primary btn-lg">Let Us Know!</Link>
			</span>
		</div>
		</>
	);
}

export default LikeNothing;