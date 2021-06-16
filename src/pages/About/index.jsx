import React from "react";
// components
import {AboutText, PageBanner} from "#components";

export const About = () => {
	return(
		<>
			<div class="m-3">

				<PageBanner
					bgImg="bg-about-image"
					text="About PolyCycles"
					cols="col-9"
				/>

				<div class="row justify-content-center">
					<AboutText />
				</div>
				
				
			</div>
		</>
	);
}

export default About;