import React, {useState} from "react";
// Components
import GalleryCard  from "./GalleryCard";
import {BikeTypes} from "#constants/bikes";
const BikeListings = require("#data/BikeListingForm");


export const BikeGallery = (props) => {
	const [filterType, setFilterType] = useState("All Bikes");
	const bikeListingsFiltered = (filterType == "All Bikes") 
		?
			BikeListings 
		: 
			BikeListings.filter((bike) => {return bike["Bike Type"] == filterType});

    return ( 
    	<React.Fragment>
    		<div class="px-1 px-lg-5">
				<div class="row">
					<h1 class="text-center fw-light pb-0 pb-lg-2">
					    Bikes For Rent
					</h1>
				</div>

				<div class="row py-1 py-lg-3">
					<div class="col-12 text-end">
						<div class="dropdown">
						  <button class="btn btn-ouline-secondary dropdown-toggle" type="button" id="filterBikes" data-bs-toggle="dropdown" aria-expanded="false">
						    {filterType}
						  </button>
						  <ul class="dropdown-menu" aria-labelledby="filterBikes">
						  	{
						  		BikeTypes.map((type, id) => (
						  			<li style={{"cursor":"pointer"}} onClick={() => {setFilterType(type.name)}}>{type.name}</li>
						  		))
						  	}
						  </ul>
						</div>
					</div>

				</div>

				<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
					{
						bikeListingsFiltered.length > 0 ?
							bikeListingsFiltered.map((bike, id) => (
								<GalleryCard
								    id={bike["id"]} 
								    image={bike["Images"][0]}
								    title={`${bike["Bike Brand"]} — ${bike["Bike Model"]}`}
								    type={`${bike["Bike Type"]}`}
								    size={bike["Bike Size"]}
								    price={bike["Price Per Month"]}
								/>
							))
						:
							<p class="fw-strong mx-auto">No bikes of this type.</p>
					}
				</div>
			</div>
		</React.Fragment>
    );
}

export default BikeGallery;