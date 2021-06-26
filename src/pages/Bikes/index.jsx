import React from "react";
import {Link} from "react-router-dom";
// Components
import {BikeGallery} from "#components";



export const Bikes = () => {
    return ( 
    	<React.Fragment>
        	<div className="mx-1 mx-sm-5 my-3">

                <BikeGallery />

        	</div>
		</React.Fragment>
    );
}

export default Bikes;