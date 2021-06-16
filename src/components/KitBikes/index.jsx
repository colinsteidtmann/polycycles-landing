import React from "react";
// Components
import {BikeCard} from "./BikeCard.jsx";

export const KitBikes = (props) => {
	const {bikesData} = props;
	return (
		<>
			<div class="row justify-content-start m-3 gy-3">

				{bikesData.map((bike, id) => (
					<BikeCard
						img={bike.image}
						title={bike.name}
						type={bike.type}
						retail={bike.price}
						src={bike.link}
					/>
				))}
				
			</div>
		</>
	);	
}

export default KitBikes;