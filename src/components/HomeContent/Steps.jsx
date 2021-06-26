import React from "react";
// Imports
import {mountainBike, returnIcon, signUp} from "#svg/Home";

const StepCard = (props) => {
    const {icon, title, body} = props;
    return (
        <React.Fragment>
            <div class="col-12 col-md-4 col-lg-3">
                <div class="card border-0 bg-transparent">
                  <img src={icon} class="card-img-top mx-auto h-25 w-25" alt="Card icon" />
                  <div class="card-body">
                    <h5 class="card-title">
                        {title}
                    </h5>
                    <p class="card-text">
                        {body}
                    </p>
                  </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export const Steps = () => {
	return (
		<React.Fragment>
			<div class="row py-4 py-lg-5" id="learn">
			    <h1 class="text-center fw-light">
			        Three easy steps
			    </h1>
			</div>
			<div class="row justify-content-center">

			    <StepCard
			        icon={signUp}
			        title="Sign Up"
			        body="Fill out a listing application or rent a bike for a month (or longer)."
			    />
			    <StepCard
			        icon={mountainBike}
			        title="Ride Bike"
			        body="We'll pick up the bike, make sure it's ready to ride, and deliver it. If something happens while you're renting then we'll come out and take a look."
			    />
			    <StepCard
			        icon={returnIcon}
			        title="Return Bike"
			        body="After one month, we'll get the bike from the renter, check for damage besides normal wear and tear, and return it to the owner in the condition it left them."
			    />
			</div>
		</React.Fragment>
	);
};

export default Steps;