import React from "react";
// Components

const BikeComponent = (props) => {
	const {label, info} = props;
	return (
	    <li class="list-group-item">

	    	<div class="row text-start">
		    	<div class="col-4">
		    		<strong>{label}</strong>
		    	</div>
		    	<div class="col-8">
		    		{info}
		    	</div>
	    	</div>
	    	 
	    </li>
	);
}

export const BikeCard = (props) => {
	const {
		img, 
		title, 
		type,
		retail,
		src
	} = props;

	return (
		<div class="col-4">

			<div class="card h-100 w-100">

			  <img 
			  	src={img} 
			  	class="card-img-top" 
			  	alt="Bike image"
			  />

			  <div class="card-body">
			    <h5 class="card-title">{title}</h5>
			  </div>

			  <ul class="list-group list-group-flush">

			  	<BikeComponent 
			  		label="Type:"
			  		info={type}
			  	/>

			  	<BikeComponent 
			  		label="Retail:"
			  		info={"$ " + retail}
			  	/>

			  </ul>

			  <div class="card-body">
			    <a href={src} class="card-link" target="_blank" rel="noopener noreferrer">View the bike online <i class="fas fa-external-link-alt"></i></a>
			  </div>

			</div>

		</div>
	);
}

export default BikeCard;