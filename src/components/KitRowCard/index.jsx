import React from "react";
import { Link } from "react-router-dom";
// Components
import { IconList } from "#components";

export const KitRowCard = (props) => {
    const { kit, special } = props;
    return (
        <div className="col-12 col-md-11 col-xl-9">

	        <div className="card w-100 h-100">

	        	<div className={"card-header py-2 text-white " + (kit.bgColorClass || "bg-secondary")}>

					<h5 className="fw-normal my-auto text-center">
						{kit.title}
					</h5>

	        	</div>

	        	<div className="card-body bg-white text-start">

	        		<div className="row px-0 px-lg-3">

	        			<div className="col-12 col-lg-8">

	        				<p className="fw-light">
	        					{kit.description}
	        				</p>

	        				<p className="fw-normal mb-0">Bike selection</p>
	        				
	        				<IconList list={kit.bikeTypes} />

	        				{
	        					special &&
	        					<React.Fragment>
	        						<p className="fw-normal mb-0">Features</p>
	        						<IconList list={kit.features} />
	        					</React.Fragment>
	        				}

	        			</div>

	        			<div className="col-12 col-lg-4 text-start text-lg-end py-4 py-md-2 py-lg-0">
	        				
	        				<Link to={kit.to} className="btn btn-primary mb-3 mb-md-2">
	        					View
	        				</Link>

	        				<br/>

	        				<button type="button" className="btn btn-outline-primary mb-3 mb-md-0" disabled>
	        					{kit.price} 
	        				</button>

	        			</div>
	        			<small>*Prices are estimates right now</small>
	        		</div>

	        	</div>

				<Link className="stretched-link" to={kit.to}/>

			</div>
    	</div>

    );
}

export default KitRowCard;