import React from "react";
import {useParams, Link} from "react-router-dom";
// components
import {DetailsContent} from "#components";


export const BikeDetails = () => {
    return ( 
    	<React.Fragment>
        	<div className="mx-1 mx-sm-5 my-3">
                <DetailsContent/>

        	</div>
		</React.Fragment>
    );
}

export default BikeDetails;