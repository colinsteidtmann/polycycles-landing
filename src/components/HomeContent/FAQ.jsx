import React from "react";
// Imports
import {Accordian} from "#components";

export const FAQ = () => {
	return (
		<React.Fragment>

			<div class="row my-5">
			    <h1 class="text-center fw-light">
			        FAQ
			    </h1>
			</div>

			<div class="row justify-content-center mb-5">
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
			        	        	We keep the bikes in excellent condition so that they could be sold as used for a good price. If one of our customers ends up buying a bike after renting it, we'll take a comission. 
			        	        </p>
			        	    </Accordian.Body>
			        	</Accordian.Item>
			            <Accordian.Item id="1">
			                <Accordian.Header>
			                    Cost and Fees
			                </Accordian.Header>
			                <Accordian.Body>
			                    <p class="fw-light text-start">
			                    	<strong>Bike owner fees:</strong> 5-10% comission + any service work / repairs that need to be done before we can rent it out.
			                    </p>
			                    <p class="fw-light text-start">
			                    	<strong>Bike renter fees:</strong> Rental fee + delivery and pickup + any service work / repairs that need to be done after the bike is rented.
			                    </p>
			                    <p class="fw-light text-start">
			                    	<strong>Optional costs:</strong> Riding accessories and bike fits.
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
			                		The bike owner fills out a rental application. We'll then review it, see the bike in person, take photos and collect details on its components, wear, and tear, and then we'll post it on the website. If someone wants to rent the bike (for a month or longer) then the bike owner will be notified and they can accept or deny. If they accept, then we'll come pick the bike up. If the bike needs any service work (cleaning, tuneups, repairs) done before it can be rented, then the bike owner is required to pay us to do it. We will price match guarantee with the surrounding bike shops. Between rentals, if the bike owner doesn't ride the bike, then no service work should be necessary. 
			                	</p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="5">
			                <Accordian.Header>
			                    How renting a bike works
			                </Accordian.Header>
			                <Accordian.Body>
			                    <p class="fw-light text-start">
			                    	A bike renter finds a bike they like and fills out a form to rent it for a month or longer. If their rental application gets approved by the bike owner then we'll pick the bike up, make sure it's ready to ride, and then we'll deliver it to the renter. While the bike is being rented, if anything breaks or doesn't seem right, then the renter should let us know so that way we can come and take a look. Once the rental period is over, we'll pick the bike up, inspect it for any damage, and require that the renter pay for any service work (cleaning, tuning, repairs) if it's needed (we'll price match guarantee with surrounding bike shops). 
			                    </p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="6">
			                <Accordian.Header>
			                    Why rent your bike(s) out?
			                </Accordian.Header>
			                <Accordian.Body>
			                	<p class="fw-strong text-start">
			                		Individuals
			                	</p>
			                	<p class="fw-light text-start">
			                		Some individuals own too many bikes! Maybe they have a race bike that they only use a few times a year, or a mountain bike that they only want to ride in the summer. Why let it sit around when plenty of people would love to ride it? Bikes are assets! We ensure that it stays in good condition and we’ll replace anything that breaks.
			                	</p>
			                    <p class="fw-strong text-start">
			                    	Retail shops
			                    </p>
			                    <p class="fw-light text-start">
			                    	Bike retailers will have bikes that they’re having trouble selling. PolyCycles provides them a way to clear inventory, make money, and resell the bikes as used whenever the right customer comes along. We also drive customers to their business by letting them know that they can buy the bike if they liked it after renting it.
			                    </p>
			                    <p class="fw-strong text-start">
			                    	Direct to consumer bike brands
			                    </p>
			                    <p class="fw-light text-start">
			                    	Direct to consumer bike brands don’t have a way to let customers demo/try their bikes. PolyCycles is their solution. We won’t retail the bikes, we’ll just take a commission from any purchase that comes from one of our customers. This lets D2C brands stay direct to consumer while also letting interested customers try before they buy.
			                    </p>
			                </Accordian.Body>
			            </Accordian.Item>
			            <Accordian.Item id="7">
			                <Accordian.Header>
			                    Why rent someone else's bike
			                </Accordian.Header>
			                <Accordian.Body>
			                	<p class="fw-light text-start">
			                	<strong>Anyone</strong> who is tired of:
				                	<ul>
				                		<li>
				                			Replacing parts (eg. tires, tubes, chains, cables, etc.).
				                		</li>
				                		<li>
				                			Cleaning their bike.
				                		</li>
				                		<li>
				                			Maintaining their bike.
				                		</li>
				                	</ul>
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Racers</strong> who don ‘t want to spend <i>$$$</i> on bikes they only use in races.
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Adventurers</strong> who want to try multiple bike genres (road, gravel, mountain).
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Families</strong> with kids growing and changing hobbies.
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Casual riders</strong> who only ride a few times a month.
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Tech geeks</strong> who always want the latest and greatest.
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Seasonal riders</strong> who only ride when the weather is nice or in their off-season.
			                	</p>
			                	<p class="fw-light text-start">
			                		<strong>Apartment renters</strong> who don’t have room for multiple bikes.
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