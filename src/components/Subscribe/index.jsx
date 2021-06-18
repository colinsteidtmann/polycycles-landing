import React, { useState } from "react";
import { formStatuses } from "#constants";
import { sendSubscribe } from "#api";
import { useApiForm } from "#hooks";

export const Subscribe = () => {
    const [email, setEmail] = useState();
    const { loading, handleSubmit, displayState, setDisplayState } = useApiForm(sendSubscribe);
    return (
        <div className="row">
			<div className="col mx-auto">


				{
					displayState === formStatuses.FORM ? 
						<div className="input-group justify-content-center">
							<input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value)}} />
						  	<button 
						  		className="btn btn-primary" 
						  		type="button" id="subscribe" 
						  		onClick={() => {handleSubmit({"email":email})}}
						  	>
						  		{
						  			loading ? 
						  				<div className="spinner-border" role="status">
						  				  <span className="visually-hidden">Loading...</span>
						  				</div>
						  			:
						  				"Subscribe"
						  		}
						  	</button>
						</div>
					: displayState === formStatuses.SENT ?
						<div>
							<span className="fw-normal text-primary me-2"> Got it. Thanks! </span>
							<button className="btn btn-primary btn-sm" onClick={() => {setDisplayState(formStatuses.FORM)}}>
								Back
							</button>
						</div>
					:
						<div>
							<p className="fw-normal text-danger"> Bummer. Error. Try again or email us at friends@polycycles.com </p>
							<button className="btn btn-primary btn-sm" onClick={() => {setDisplayState(formStatuses.FORM)}}>
								Back
							</button>
						</div>
						

				}

			</div>
		</div>
    );
}

export default Subscribe;