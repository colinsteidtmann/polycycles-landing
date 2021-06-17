import React from "react";
// Components

const BikeComponent = (props) => {
    const { label, info } = props;
    return (
        <li className="list-group-item">

	    	<div className="row text-start">
		    	<div className="col-4">
		    		<strong>{label}</strong>
		    	</div>
		    	<div className="col-8">
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
        <div className="col-12 col-md-6 col-xl-4">

			<div className="card h-100 w-100">

			  <img 
			  	src={img} 
			  	className="card-img-top" 
			  	alt="Bike image"
			  />

			  <div className="card-body">
			    <h5 className="card-title">{title}</h5>
			  </div>

			  <ul className="list-group list-group-flush">

			  	<BikeComponent 
			  		label="Type:"
			  		info={type}
			  	/>

			  	<BikeComponent 
			  		label="Retail:"
			  		info={"$ " + retail}
			  	/>

			  </ul>

			  <div className="card-body">
			    <a href={src} className="card-link" target="_blank" rel="noopener noreferrer">View the bike online <i className="fas fa-external-link-alt"></i></a>
			  </div>

			</div>

		</div>
    );
}

export default BikeCard;