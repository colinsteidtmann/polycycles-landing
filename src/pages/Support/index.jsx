import React from "react";
// components
import {SupportText, PageBanner} from "#components";

export const About = () => {
	return(
		<>
			<div class="m-3">

				<PageBanner
					bgImg="bg-support-image"
					text="Support PolyCycles"
					cols="col-9"
				/>

				<div class="row justify-content-center">
					<SupportText />
				</div>
				
				
			</div>
		</>
	);
}

export default About;