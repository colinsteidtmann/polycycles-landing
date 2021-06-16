import React from "react";
// Components
import {IconList} from "#components";

export const KitInfoCard = (props) => {
	const {kit} = props;
	return (

			<div class="card w-100 h-100">
				<div class={"card-header py-2 border-bottom-0"}>
					<h5 class="fw-light text-center align-self-center">
						{kit.description}
					</h5>
				</div>
			
				<div class="card-body bg-light text-start">
					<div class="row">
						<div class="col-6">
							<p class="card-title fw-normal mb-0">Bike selection</p>
							<IconList list={kit.bikeTypes} />
						</div>
						<div class="col-6">
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
					</div>


				</div>

				<div class="card-header text-start fw-normal">

					<p class="fw-light">
						Bikes retail value: {kit.priceRange}
					</p>

					{
						kit.price && 
						<p class="fw-normal">
							Kit cost: {kit.price}
						</p>
					}
				</div>
			</div>
	);
}

export default KitInfoCard;