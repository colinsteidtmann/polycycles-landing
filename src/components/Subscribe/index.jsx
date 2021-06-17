import React, {useState} from "react";
import {formStatuses} from "#constants";
import {sendSubscribe} from "#api";
import {useApiForm} from "#hooks";

export const Subscribe = () => {
	const [email, setEmail] = useState();
	const {loading, handleSubmit, displayState, setDisplayState} = useApiForm(sendSubscribe);
	return (
		<div class="row">
			<div class="col mx-auto">


				{
					displayState === formStatuses.FORM ? 
						<div class="input-group justify-content-center">
							<input type="email" class="form-control" id="emailInput" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value)}} />
						  	<button 
						  		class="btn btn-primary" 
						  		type="button" id="subscribe" 
						  		onClick={() => {handleSubmit({"email":email})}}
						  	>
						  		{
						  			loading ? 
						  				<div class="spinner-border" role="status">
						  				  <span class="visually-hidden">Loading...</span>
						  				</div>
						  			:
						  				"Subscribe"
						  		}
						  	</button>
						</div>
					: displayState === formStatuses.SENT ?
						<div>
							<span class="fw-normal text-primary me-2"> Got it. Thanks! </span>
							<button class="btn btn-primary btn-sm" onClick={() => {setDisplayState(formStatuses.FORM)}}>
								Back
							</button>
						</div>
					:
						<div>
							<p class="fw-normal text-danger"> Bummer. Error. Try again or email us at friends@polycycles.com </p>
							<button class="btn btn-primary btn-sm" onClick={() => {setDisplayState(formStatuses.FORM)}}>
								Back
							</button>
						</div>
						

				}

			</div>
		</div>
	);
}

export default Subscribe;