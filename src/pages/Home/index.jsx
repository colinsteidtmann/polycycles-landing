import React from "react";
import {Link} from "react-router-dom";
// components
import {HomeBanner, HomeDescription, KitRowCard, LikeNothing} from "#components";
import {RaceKit, PerformanceKit, SportKit, CommuterKit, FamilyKit, ShortTermKit} from "#constants";


export const Home = () => {
	return(
		<>
			<div class="m-3">

				<HomeBanner />
				<HomeDescription />

				<div class="row justify-content-center py-5 gy-3">

					<h4 class="fw-bold text-center my-4">
						Main Kits
					</h4>

					<div class="col-9">
						<KitRowCard kit={RaceKit} />
					</div>

					<div class="col-9">
						<KitRowCard kit={PerformanceKit} />
					</div>

					<div class="col-9">
						<KitRowCard kit={SportKit} />
					</div>

					<div class="col-9 mb-5">
						<KitRowCard kit={CommuterKit} />
					</div>

					<h4 class="fw-bold text-center my-4">
						Special Kits
					</h4>

					<div class="col-9">
						<KitRowCard kit={FamilyKit} special={true} />
					</div>

					<div class="col-9">
						<KitRowCard kit={ShortTermKit} special={true} />
					</div>

				</div>

				<LikeNothing />
				
				
			</div>
		</>
	);
}

export default Home;