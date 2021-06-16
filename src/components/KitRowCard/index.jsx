import React from "react";
import { Link } from "react-router-dom";
// Components
import { IconList } from "#components";

export const KitRowCard = (props) => {
    const { kit, special } = props;
    return (

        <div class="card w-100 h-100">
        	<div class={"card-header py-2 text-white " + (kit.bgColorClass || "bg-secondary")}>
				<h5 class="fw-normal my-auto text-center">
					{kit.title}
				</h5>
        	</div>
        	<div class="card-body bg-white text-start">
        		<div class="row px-3">
        			<div class="col-8">
        				<p class="fw-light">
        					{kit.description}
        				</p>

        				<p class="fw-normal mb-0">Bike selection</p>
        				<IconList list={kit.bikeTypes} />

        				{
        					special &&
        					<>
        						<p class="fw-normal mb-0">Features</p>
        						<IconList list={kit.features} />
        					</>
        				}

        			</div>
        			<div class="col-4 text-end py-4">
        				<Link to={kit.to} class="btn btn-primary mb-3">
        					View
        				</Link>
        				<br/>
        				<button type="button" class="btn btn-outline-primary mb-3" disabled>
        					{kit.price} 
        				</button>
        			</div>
        		</div>

        	</div>
			<Link class="stretched-link" to={kit.to}/>
		</div>
    );
}

export default KitRowCard;