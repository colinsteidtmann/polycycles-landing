import React from "react";
// Components
import { IconList } from "#components";

export const KitInfoCard = (props) => {
    const { kit } = props;
    return (

        <div className="card w-100 ">
				<div className={"card-header border-bottom-0 py-2"}>
					<h5 className="fw-light text-center align-self-center">
						{kit.description}
					</h5>
				</div>
			
				<div className="card-body bg-light text-start">
					<div className="row">
						<div className="col-12 col-md-6">
							<p className="card-title fw-normal mb-0">Bike selection</p>
							<IconList list={kit.bikeTypes} />
						</div>
						<div className="col-12 col-md-6">
							{
								kit.features && 

								<React.Fragment>
									<p className="card-title fw-normal mb-0">Features</p>
									<IconList list={kit.features} />
								</React.Fragment>
							}
							

							{
								kit.bonuses && 

								<React.Fragment>
									<p className="card-title fw-normal mb-0">Bonuses</p>
									<IconList list={kit.bonuses} />
								</React.Fragment>
							}
						</div>
					</div>


				</div>

				<div className="card-header text-start fw-normal">

					<p className="fw-light">
						Bikes retail value: {kit.priceRange}
					</p>

					{
						kit.price && 
						<p className="fw-normal">
							Kit cost: {kit.price}
						</p>
					}
				</div>
			</div>
    );
}

export default KitInfoCard;