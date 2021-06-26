import React from "react";
import {Link} from "react-router-dom";
// Components

const BikeComponent = (props) => {
    const { label, info } = props;
    return (
        <li className="list-group-item p-0 bg-transparent border-0">

            <div className="row text-start ">
                <div className="col-6">
                    <strong>{label}</strong>
                </div>
                <div className="col-6">
                    {info}
                </div>
            </div>
             
        </li>
    );
}

const GalleryCard = (props) => {
    const {id, image, title, size, type, price} = props;
    return (
        <div class="col">
            <div class="card bg-transparent h-100">
              <img 
                src={image} 
                class="card-img-top" 
                alt="Bike photo"
                style={{"height":"auto", "objectFit":"cover"}}
                />
                <div class="card-body">
                    <h5 class="card-title">
                        {title}
                    </h5>

                    <ul className="list-group list-group-flush ">

                        <BikeComponent 
                            label="Size:"
                            info={size}
                        />

                        <BikeComponent 
                            label="Type:"
                            info={type}
                        />

                    </ul>
                </div>
              <div class="card-header bg-transparent">
                <div class="row text-start">
                    <div class="col-6">
                        <span class="fw-bold">
                            Price / month:
                        </span>
                    </div>
                    <div class="col-6">
                        $ {price}
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col text-start">
                        <Link to={`/bikes/${id}`} class="btn btn-dark">View</Link>
                    </div>
                </div>
              </div>
              <Link to={`/bikes/${id}`} className="stretched-link" />
            </div>
            
        </div>
    );
}

export default GalleryCard;