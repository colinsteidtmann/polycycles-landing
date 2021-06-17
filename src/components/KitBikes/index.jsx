import React from "react";
// Components
import { BikeCard } from "./BikeCard.jsx";

export const KitBikes = (props) => {
    const { bikesData } = props;
    return ( <React.Fragment>
        <div className="row justify-content-start gy-3">

				{bikesData.map((bike, id) => (
					<BikeCard
						img={bike.image}
						title={bike.name}
						type={bike.type}
						retail={bike.price}
						src={bike.link}
					/>
				))}
				
			</div> </React.Fragment>
    );
}

export default KitBikes;