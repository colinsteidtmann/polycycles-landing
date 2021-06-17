import React from "react";
// components
import { AboutText, PageBanner } from "#components";

export const About = () => {
    return ( <React.Fragment>
        <div className="mx-1 m-lg-3">

				<PageBanner
					bgImg="bg-about-image"
					text="About PolyCycles"
					cols="col-12 col-md-10 col-xl-9"
				/>

				<div className="row justify-content-center">
					<AboutText />
				</div>
				
				
			</div> </React.Fragment>
    );
}

export default About;