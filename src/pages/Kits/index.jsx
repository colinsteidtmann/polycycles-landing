import React from "react";
// components
import { PageBanner, KitColumnCard, LikeNothing } from "#components";
// constants
import { RaceKit, PerformanceKit, SportKit, CommuterKit, FamilyKit, ShortTermKit } from "#constants";






export const Kits = () => {
    return ( 
    	<React.Fragment>
        <div className="mx-1 m-md-3">


				<PageBanner
					bgImg="bg-kit-image"
					text="Our Planned Kits"
					cols="col-12 col-lg-11 col-xl-9"
				/>

				<div className="row mb-5">

					<div className="col-12 col-lg-11 col-xl-9 mx-auto mb-4">
						
						<h4 className="fw-bold text-center my-4">
							Main Kits
						</h4>

						<div className="row justify-content-center gx-4 gy-3">

							<KitColumnCard kit={RaceKit} />

							<KitColumnCard kit={PerformanceKit} />

							<KitColumnCard kit={SportKit} />

							<KitColumnCard kit={CommuterKit} />

						</div>

					</div>

					<div className="col-12 col-lg-9 mx-auto">
						
						<h4 className="fw-bold text-center my-4">
							Special Kits
						</h4>

						<div className="row justify-content-center gx-4 gy-3">

							<KitColumnCard kit={FamilyKit} />

							<KitColumnCard kit={ShortTermKit} />

						</div>

					</div>

				</div>

				<LikeNothing />
			</div> 
		</React.Fragment>
    );
}

export default Kits;