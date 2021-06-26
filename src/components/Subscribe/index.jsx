import React, { useState } from "react";
import { FormStatuses } from "#constants/forms";
import { sendSubscribe } from "#api";
import { useApiForm } from "#hooks";

export const Subscribe = () => {
    const [email, setEmail] = useState();
    const { loading, handleSubmit } = useApiForm(sendSubscribe);
    return (
        <div className="row">
			<div className="col mx-auto">


				{
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
				}

			</div>
		</div>
    );
}

export default Subscribe;