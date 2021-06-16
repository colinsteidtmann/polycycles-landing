import React from "react";

export const Subscribe = () => {

	return (
		<div class="row">
			<div class="col mx-auto">
				<div class="input-group justify-content-center">
					<input type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
				  	<button class="btn btn-primary" type="button" id="subscribe">Subscribe</button>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;