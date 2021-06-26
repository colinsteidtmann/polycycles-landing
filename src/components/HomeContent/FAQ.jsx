import React from "react";
// Imports
import {Accordian} from "#components";

export const FAQ = () => {
	return (
		<React.Fragment>
			<div class="row py-4 py-lg-5">
			    <h1 class="text-center fw-light">
			        FAQ
			    </h1>
			</div>
			<div class="row justify-content-center pb-5">
			    <div class="col-12 col-md-9 col-lg-6">
			        <Accordian id={"faq-accordian"} flush={true}>
			        	<Accordian.Item id="0">
			        	    <Accordian.Header>
			        	        Partnerships with Retailers and Brands
			        	    </Accordian.Header>
			        	    <Accordian.Body>
			        	        <p class="fw-light text-start">
			        	        	We provide a way for retailers and direct to consumer bike brands to let interested customers try their bikes before buying. We also help them make money on bikes that they're having trouble selling. 
			        	        	<br/>
			        	        	<br/>
			        	        	We keep the bikes in excellent condition so that they could be sold as used for a good price. In return, we take a comission on any bike that one of our customers ends up buying.
			        	        </p>
			        	    </Accordian.Body>
			        	</Accordian.Item>
			            <Accordian.Item id="1">
			                <Accordian.Header>
			                    Cost and Fees
			                </Accordian.Header>
			                <Accordian.Body>
			                    <p class="fw-light text-start">
			                    	<strong>Bike owner fees:</strong> 5% comission + any service work / repairs that need to be done before we can rent it out.
			                    </p>
			                    <p class="fw-light text-start">
			                    	<strong>Bike renter fees:</strong> Rental fee + delivery and pickup + any service work / repairs that need to be done after the bike is rented.
			                    </p>
			                    <p class="fw-light text-start">
			                    	<strong>Optional costs:</strong> Accessories, bike fits
			                    </p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="2">
			                <Accordian.Header>
			                    Insurance
			                </Accordian.Header>
			                <Accordian.Body>
			                    <p class="fw-light text-start">
			                    	We do not cover the bikes with insurance at this time. Right now, renters are fully responsible for their own safety and they <i>must</i> pay for any damages they cause. 
			                    </p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="3">
			                <Accordian.Header>
			                    Repairs before, during, and after rental
			                </Accordian.Header>
			                <Accordian.Body>
			                	<p class="fw-light text-start">
			                    We make sure the bikes are clean, repaired, and tuned up before and after the rental. During the rental, if something needs to be repaired or tuned, we'll do it at no additional charge if it isn't the renter's fault, otherwise, they're required to pay. 
			                   	</p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="4">
			                <Accordian.Header>
			                    How listing a bike works
			                </Accordian.Header>
			                <Accordian.Body>
			                	<p class="fw-light text-start">
			                		The bike owner fills out a rental application. We'll then review it and post it on the website. If someone wants to rent the bike (for a month or longer) then the bike owner will be notified and they can accept or deny. If they accept, then we'll come pick the bike up. If the bike needs any service work (cleaning, tuneups, repairs) done before it can be rented, then the bike owner is required to pay us to do it. We will price match guarantee with the surrounding bike shops. 
			                	</p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="5">
			                <Accordian.Header>
			                    How renting a bike works
			                </Accordian.Header>
			                <Accordian.Body>
			                    <p class="fw-light text-start">
			                    	A bike renter finds a bike they like and fills out a form to rent it for a month or longer. If their rental application gets approved by the bike owner then we'll pick the bike up, make sure it's ready to ride, and then deliver it to the renter. While the bike is being rented, if anything breaks or doesn't seem right, then the renter should absolutely let us know so that way we can come and take a look. Once the rental period is over, we'll pick the bike up, inspect it for any damage, and require that the renter pay for any service work (cleaning, tuning, repairs) if it's needed (we'll price match guarantee with surrounding bike shops). 
			                    </p>
			                </Accordian.Body>
			            </Accordian.Item>
			        </Accordian>
			    </div>
			</div>
		</React.Fragment>
	);
};

export default FAQ;