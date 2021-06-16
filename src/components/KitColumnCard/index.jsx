import React from "react";
import {Link} from "react-router-dom";
// Components
import {IconList} from "#components";

export const KitColumnCard = (props) => {
	const {kit} = props;
	return (
		<div class="col-4">
			<div class="card w-100 h-100">

				<div class={"card-header py-2 text-white " + (kit.bgColorClass || "bg-secondary")}>
					<h5 class="fw-normal text-center align-self-center">
						{kit.title}
					</h5>
				</div>
			
				<div class="card-body bg-light text-start">

					<p class="card-title fw-normal mb-0">Bike selection</p>
					<IconList list={kit.bikeTypes} />

					{
						kit.features && 

						<>
							<p class="card-title fw-normal mb-0">Features</p>
							<IconList list={kit.features} />
						</>
					}
					

					{
						kit.bonuses && 

						<>
							<p class="card-title fw-normal mb-0">Bonuses</p>
							<IconList list={kit.bonuses} />
						</>
					}

				</div>

				<div class="card-header bg-white text-start fw-normal">

					<p class="fw-light text-center">
						Bikes retail value: {kit.priceRange}
					</p>

					<div class="row">

						<div class="col-9 py-2">

							<p class="fw-normal">
								Kit cost: {kit.price}
							</p>

						</div>
						<div class="col-3">
							<Link to={kit.to} type="button" class="btn btn-primary float-end">View</Link>
						</div>
					</div>
	
				</div>

				<Link to={kit.to} class="stretched-link" />
			</div>
		</div>
	);
}

export default KitColumnCard;