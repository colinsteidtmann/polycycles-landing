import React from "react";
// components
import { ContactForm } from "#components";


export const SupportText = () => {
    return (
        <div className="col-12 col-md-10 col-xl-9 text-start py-5">
			<h5 className="fw-normal">
				<strong>Main Ways to Help: </strong>
			</h5>
			<p className="fw-light ms-3">
				First, if you haven't already. Please go through our kits,
				pick one that you're interested in, and give us some feedback.
				If we don't get enough feedback then we'll think our business 
				doesn't need to exist so we won't launch. 

				<br /><br/>
				After you've done that, please help get the word out! Share on social media, 
				tell your mates on your next club ride, tell your parents, tell the world!
				The more people that know about us then the more feedback we should get, so 
				our chances of launching will be higher and our products will be better. 
			</p>

			<h5 className="fw-normal">
				<strong>Hiring: </strong>
			</h5>
			<p className="fw-light ms-3">
				We have a tiny team right now so we could use all the help we can get. But 
				specifically we need: 

				<ul>
					<li>
						Business/economics/financial experts.
					</li>
					<li>
						Logistics experts.
					</li>
					<li>
						Software engineers.
					</li>
					<li>
						Bike experts.
					</li>
				</ul>

				Volunteers and interns are very welcomed. Come and get some real startup experience!
			</p>

			<h5 className="fw-normal">
				<strong>Investors: </strong>
			</h5>
			<p className="fw-light ms-3">
				Hypothetically, let's say we get a ton of people to fill out our forms, give us feedback,
				and show us their demand for our business. Then we'd want to launch. But this business model 
				has a very large upfront cost. We need to buy all the bikes, find some place to store them, and 
				hire bike mechanics. We'll need some capital so we're open to anyone who wants to help and give us an 
				investment. Though, it still would need to be the right partners and partnership of course.
			</p>

			<h5 className="fw-normal pt-5">
				<strong>Contact Us! </strong> 
			</h5>
			<ContactForm />
		</div>
    );
}

export default SupportText;