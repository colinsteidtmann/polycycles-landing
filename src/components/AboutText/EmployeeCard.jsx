import React from "react";
import { IconList } from "#components";

export const EmployeeCard = (props) => {
    const { employee } = props;
    return (
        <div className="card w-100 h-100">
			<img 
				src={employee.profilePic} 
				className="card-img-top" 
				alt="..." 
				style={{ "min-height": "30vh", objectFit: "cover" }}
			/>
			<div className="card-body">
				<h5 className="card-title fw-normal">
					<strong>{employee.name} &#8212; </strong> 
					<small> {employee.role}</small>
				</h5>
				<p className="card-text ">
					{employee.about}
				</p>
				
			</div>
			<ul className="list-group list-group-flush">
			  <li className="list-group-item">
			  	<p className="fw-bold mb-0">
			  		Achievements
			  	</p>
			  	<IconList 
			  		list={employee.achievements}
			  		className="fa-ul fw-light mx-0"
			  	/>
			  </li>
			  <li className="list-group-item">
			  	<p className="fw-bold mb-0">
			  		Socials
			  	</p>
			  	<IconList 
			  		list={employee.socials}
			  		className="fa-ul fw-light mx-0"
			  	/>
			  </li>
			</ul>
		</div>
    );
}

export default EmployeeCard;