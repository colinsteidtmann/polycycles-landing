import React, {useState} from "react";
import {Link} from "react-router-dom";
// Imports
import {ShareButtons} from "#components";
import {FontIcons} from "#constants/icons";
import { sendSubscribe } from "#api";
import { useApiForm } from "#hooks";

export const Footer = () => {
	const [email, setEmail] = useState();
	const { loading, handleSubmit } = useApiForm(sendSubscribe);
	return (
		<React.Fragment>
			<div class="row row-cols-1 row-cols-md-2 px-2 mt-0 p-lg-5 mt-lg-5">
			    <div class="col mb-5 mb-lg-0">
			        <h3 class="text-center fw-light">
			            Share us on social media
			        </h3>
			        <ShareButtons/>
			    </div>

			    <div class="col">
			        <h3 class="text-center fw-light">
			            Subscribe for updates
			        </h3>
			        <div class="input-group form-floating mb-5">
			            <input 
			                type="email" 
			                class="form-control bg-transparent border-top-0 border-end-0 border-start-0 border-bottom-1" 
			                id="floatingInput" 
			                placeholder="name@example.com"
			                onChange={(e) => {setEmail(e.target.value)}}

			            />
			            <label for="floatingInput">
			                Email address
			            </label>
			            <button 
			                class="btn border-bottom"
			                onClick={() => {handleSubmit({"email":email})}}
			            >
			                {
			                	loading ? 
			                		<div className="spinner-border" role="status">
			                		  <span className="visually-hidden">Loading...</span>
			                		</div>
			                	:
			                		"Submit"
			                }

			            </button>
			        </div>
			    </div>
			</div>
			<div class="row mb-5">
				<h3 class="text-center fw-light">
				    Have a question? 
				    <Link to="/help" class="ms-3 text-secondary">
					    Contact us 
					    <span class="ms-3 text-dark">{FontIcons.envelope}</span>
				    </Link>
				</h3>
			</div>
		</React.Fragment>
	);
};

export default Footer;