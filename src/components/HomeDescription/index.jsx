import React from "react";
// Components
import {IconList} from "#components"
// Hooks
// Other imports
import {WhatWeDo, WhoItsFor} from "#constants";


const InfoBox = (props) => {
	const {children, title} = props;
	return (
		<>
			<div class="col-sm-6">
			  <div class="card text-dark bg-light h-100">
			    <div class="card-body">
			      <h5 class="card-title text-center my-4 fw-normal">{title}</h5>
			      {children}
			    </div>
			  </div>
			</div>
		</>
	);
}

export const HomeDescription = (props) => {
	return (
		<>
			{/* Explanation card */}
			<div class="row my-2 text-start justify-content-center" id="learn">

				<InfoBox title="What we'll do">
					<IconList list={WhatWeDo.doList} />
				</InfoBox>

				<InfoBox title="Who it's for">
					<IconList list={WhoItsFor.forList} />
				</InfoBox>

			</div>

			{/*  Need help banner */}
			<div class="py-5 px-5 text-light text-center bg-home2-image">
				<h1 class="display-6 fw-normal ">
					But we need your help
				</h1>
				<p class="lead fw-normal">
					We'll only start this business if there's significant demand. So, check out the kits 
					below and show us your interest by clicking on one.
				</p>
			</div>
		</>
	);
}

export default HomeDescription;