import React from "react";
// components
import {ContactForm} from "#components";

export const Help = () => {
    return ( 
    	<React.Fragment>
        	<div className="mx-1 mx-sm-5 my-3">
                <div class="row justify-content-center">
                    <div class="col-11 col-md-9 col-lg-6">
                        <ContactForm
                            title="Contact Us"
                        />

                        <p class="text-start fw-light my-5">
                            We'll get back within 24 hours.
                        </p>
                    </div>
                </div>
        	</div>
		</React.Fragment>
    );
}

export default Help;