import React from "react";
import { Link } from "react-router-dom";
// Components
import { IconList } from "#components";

export const KitColumnCard = (props) => {
    const { kit } = props;
    return (
        <div className="col-12 col-md-6 col-xl-4">
			<div className="card w-100 h-100">

				<div className={"card-header py-2 text-white " + (kit.bgColorClass || "bg-secondary")}>
					<h5 className="fw-normal text-center align-self-center">
						{kit.title}
					</h5>
				</div>
			
				<div className="card-body bg-light text-start">

					<p className="card-title fw-normal mb-0">Bike selection</p>
					<IconList list={kit.bikeTypes} />

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

				<div className="card-header border-top text-start fw-normal">

					<p className="fw-light text-start text-xl-center">
						Bikes retail value: {kit.priceRange}
					</p>

					<div className="row">

						<div className="col-9 py-2">

							<p className="fw-normal">
								Kit cost: {kit.price}
							</p>

						</div>
						<div className="col-3">
							<Link to={kit.to} className="btn btn-primary float-end">View</Link>
						</div>
					</div>
	
				</div>

				<Link to={kit.to} className="stretched-link" />
			</div>
		</div>
    );
}

export default KitColumnCard;