import React from "react";
import {IconList} from "#components";

export const EmployeeCard = (props) => {
	const {employee} = props;
	return (
		<div class="card w-100 h-100">
			<img 
				src={employee.profilePic} 
				class="card-img-top" 
				alt="..." 
				style={{ "min-height": "30vh", objectFit: "cover" }}
			/>
			<div class="card-body">
				<h5 class="card-title fw-normal">
					<strong>{employee.name} &#8212; </strong> 
					<small> {employee.role}</small>
				</h5>
				<p class="card-text ">
					{employee.about}
				</p>
				
			</div>
			<ul class="list-group list-group-flush">
			  <li class="list-group-item">
			  	<p class="fw-bold mb-0">
			  		Achievements
			  	</p>
			  	<IconList 
			  		list={employee.achievements}
			  		className="fa-ul fw-light mx-0"
			  	/>
			  </li>
			  <li class="list-group-item">
			  	<p class="fw-bold mb-0">
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