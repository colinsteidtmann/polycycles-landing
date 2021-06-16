import React from "react";
import {Link} from "react-router-dom";
// components
import {PageBanner, KitColumnCard, LikeNothing} from "#components";
// constants
import {RaceKit, PerformanceKit, SportKit, CommuterKit, FamilyKit, ShortTermKit} from "#constants";






export const Kits = () => {
	return(
		<>
			<div class="m-3">

				<PageBanner
					bgImg="bg-kit-image"
					text="Our Planned Kits"
					cols="col-9"
				/>

				<div class="row mb-5">

					<div class="col-9 mx-auto mb-4">
						
						<h4 class="fw-bold text-center my-4">
							Main Kits
						</h4>

						<div class="row justify-content-center gx-4 gy-3">

							<KitColumnCard kit={RaceKit} />

							<KitColumnCard kit={PerformanceKit} />

							<KitColumnCard kit={SportKit} />

							<KitColumnCard kit={CommuterKit} />

						</div>

					</div>

					<div class="col-9 mx-auto">
						
						<h4 class="fw-bold text-center my-4">
							Special Kits
						</h4>

						<div class="row justify-content-center gx-4 gy-3">

							<KitColumnCard kit={FamilyKit} />

							<KitColumnCard kit={ShortTermKit} />

						</div>

					</div>

				</div>

				<LikeNothing />
			</div>
		</>
	);
}

export default Kits;