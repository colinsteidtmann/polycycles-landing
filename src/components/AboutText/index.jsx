import React from "react";
import { ContactForm, ExpensesSpreadsheet } from "#components";
import EmployeeCard from "./EmployeeCard.jsx";
import { EmployeeInfo } from "#constants";
import { Roadmap } from "#images/About";

export const AboutText = () => {
    return (

        <div className="col-12 col-md-10 col-xl-9 text-start py-5">
			<h5 className="fw-normal">
				<strong>Our Mission: </strong>
			</h5>
			<p className="fw-light ms-3">
				Get more people riding bikes!
			</p>
			<h5 className="fw-normal">
				<strong>Our Vision: </strong> 
			</h5>
			<p className="fw-light ms-3">
				Anybody who wants to bike, can bike. Cities are built around 
				bikes and pedestrians instead of vehicles. The world is self-sustaining, the air is clean, people 
				are healthy, and people are happy. 
			</p>
			<h5 className="fw-normal">
				<strong>Our Values: </strong> 
			</h5>
			<p className="fw-light ms-3">
				Sustainability
				<p className="text-secondary ms-2">
					Helping fight climate change and air pollution is a fundamental reason
					for why we started. We promise to leave as little as a footprint as we can. 
					We will try to deliver bikes with bikes, use eco-friendly/biodegradable 
					cleaning products, and minimize all packaging.
				</p>
				Inclusion
				<p className="text-secondary ms-2">
					Let's be honest. Bicycling, especially road cycling, is a pretty white, male 
					dominated sport. It tends to leave out those in lower economic classes. 
					We promise to look for diverse team members, offer an affordable product, and support 
					bicycling inclusion efforts. We want <em>as many people as possible</em> riding bikes.
				</p>
				Transparency
				<p className="text-secondary ms-2">
					We're big fans of crypto (and yes, we will accept crypto) for many reasons, but one of them
					is transparency. Have you ever bought something and wondered how the company came up with their price?
					How much profit are they really making? We have! And we know it's annoying. Therefore, we want to be
					as transparent as we can, starting with a spreadsheet showing all of our business costs so far. 

					<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc9MVPMC0K2xIIZaZgPc3jMuRlullCKOazLX9-3ZwCp7UGQ-pxShWO5aa3QgQxPCzEqShqlHy0-T-p/pubhtml?gid=0&single=true"
					   target="_blank"
					   className="text-primary ms-2"
					>
						 View here
					</a>
				</p> 
				
				
			</p>

			<h5 className="fw-normal">
				<strong>Our Roadmap: </strong> 
			</h5>
			<p className="fw-light ms-3">
				<div class="col-12 col-md-8">
					<img src={Roadmap} alt="Roadmap" className="img-fluid" />
				</div>
				
			</p>
			<h5 className="fw-normal">
				<strong>The Team: </strong> 
			</h5>
			<div className="row gy-3 gx-3">
				{
					EmployeeInfo.employeeList.map((employee, id) => (
						<div className="col-12 col-md-6 col-xl-4" key={id}>
							<EmployeeCard employee={employee} />
						</div>
					))
				}
			</div>

			<h5 className="fw-normal mt-5">
				<strong>Background: </strong> 
			</h5>
			<p className="fw-light ms-3">
				We launched this company in June 2021 because we were tired of soaring 
				bike prices that made trying, buying, and owning bikes unaffordable (for us at least). 
				With bikes and wheelsets that cost multiples of thousands, there's a pretty 
				high barrier to entry that makes it difficult to get a new bike or just try something new. 
				Even if you do get a new bike, then you have to maintain it. Chains and cables will get worn out,
				shifting will get bad, brakes will get loose, and parts like your wheel spokes will break. Then 
				you have to take it to a bike shop or fix it at home. But if you try fixing it at home, then not only do you have to 
				buy the parts, but you also have to buy the tools, <em>and</em> it's going to take hours of time, <em>and </em>  
				you may not even be successful. This leaves most people to rely on their local bike shop, which is great, except 
				that it costs a pretty decent amount and can take up to a few weeks. 
				<br/><br/>
				After your bike is running well and you've cleaned it in your driveway, how often do you really ride it? 
				Do you only ride it when the weather gets nice? Do you own multiple wheelsets (each costing hundreds to thousands) 
				and only use one? Do you have a race bike (triathlon maybe?) that you ride only a few times a year? Or what about 
				when the latest bike tech or new generation e-bike comes out? Are you regretting having just purchased yours, wishing 
				that you had the latest and greatest? 
				<br /><br/>
				See, owning a bike has gotten to be a challenge lately and that's a real bummer because bikes are amazing! 
				They're the ultimate multitask machine. You can transport yourself, get exercise, save the planet, and 
				have some great fun! You'll smell your neighbor's amazing cooking, breathe the crispest air, and see animals doing 
				the most interesting things. You're forced to disconnect from all technology and get some precious <em>you time.</em>
				Time to make decisions, contemplate, and reflect.
				<br /><br/>
				We want everyone to bike more and drive less. It's a positive feedback loop. The fewer cars there are, the nicer it is to bike,  
				then the more people biking, the greater the positive peer pressure, so people drive less, and the loop repeats. Bikes can do a lot 
				more than you think.
				
			</p>

			<h5 className="fw-strong">
				So, we leave you with a challenge &#8212;  
				<span className="ms-2 text-success">
				Bike More, Drive Less!
				</span>
			</h5>
			<p class="fw-light ms-3"><small> Seriously, do it for your health, do it for the planet, do it for your children, do it for your lasting legacy. </small></p>

			<hr/>
			<h5 className="fw-normal pt-5" id="contact">
				<strong>Contact: </strong> 
			</h5>
			<ContactForm />

		</div>
    );
}

export default AboutText;