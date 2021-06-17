import React from "react";
// components
import { SupportText, PageBanner } from "#components";

export const About = () => {
    return (
        <React.Fragment>
			<div className="mx-1 m-lg-3">

				<PageBanner
					bgImg="bg-support-image"
					text="Support PolyCycles"
					cols="col-12 col-md-10 col-xl-9"
				/>

				<div className="row justify-content-center">
					<SupportText />
				</div>
				
				
			</div> 
		</React.Fragment>);
}

export default About;