import React from "react";
// components
import {Banner, Steps, FAQ, Footer} from "#components/HomeContent";

export const Home = () => {
    return ( 
    	<React.Fragment>
        	<div className="mx-1 m-lg-3">

                <Banner />
                <Steps />
                <FAQ />
                <Footer />
                
        	</div>
		</React.Fragment>
    );
}

export default Home;