import React from "react";
import {Link} from "react-router-dom";
// Components
import {BikeGallery} from "#components";
import {GainD30} from "#images/Performance";



export const Bikes = () => {
    return ( 
    	<React.Fragment>
        	<div className="mx-1 m-lg-3">

                <BikeGallery />

        	</div>
		</React.Fragment>
    );
}

export default Bikes;