import React from "react";
// Components
import { IconList } from "#components"
// Hooks
// Other imports
import { WhatWeDo, WhoItsFor } from "#constants";


const InfoBox = (props) => {
    const { children, title } = props;
    return ( <React.Fragment>
        <div className="col-12 col-lg-6">
			  <div className="card text-dark bg-light h-100">
			    <div className="card-body ">
			      <h5 className="card-title text-center my-4 fw-normal">{title}</h5>
			      {children}
			    </div>
			  </div>
			</div> </React.Fragment>
    );
}

export const HomeDescription = (props) => {
    return (
        <React.Fragment>
			{/* Explanation card */}
			<div className="row text-start justify-content-center py-2 gy-2 gx-lg-auto" id="learn">

				<InfoBox title="What we'll do">
					<IconList list={WhatWeDo.doList} />
				</InfoBox>

				<InfoBox title="Who it's for">
					<IconList list={WhoItsFor.forList} />
				</InfoBox>

			</div>

			{/*  Need help banner */}
			<div className="text-light text-center bg-home2-image py-5 px-lg-5 px-2">
				<h1 className="display-6 fw-normal ">
					But we need your help
				</h1>
				<p className="lead fs-6 fw-normal">
					We'll only start this business if there's significant demand. So, check out the kits 
					below and show us your interest by clicking on one.
				</p>
			</div>
		</React.Fragment>
    );
}

export default HomeDescription;