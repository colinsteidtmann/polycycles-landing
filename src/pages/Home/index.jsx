import React from "react";
// components
import { HomeBanner, HomeDescription, KitRowCard, LikeNothing } from "#components";
import { RaceKit, PerformanceKit, SportKit, CommuterKit, FamilyKit, ShortTermKit } from "#constants";


export const Home = () => {
    return ( <React.Fragment>
        <div className="mx-1 m-lg-3">

				<HomeBanner />
				<HomeDescription />

				<div className="row justify-content-center py-5 gy-3">

					<h4 className="fw-bold text-center my-4">
						Main Kits
					</h4>

					<KitRowCard kit={RaceKit} />
					<KitRowCard kit={PerformanceKit} />
					<KitRowCard kit={SportKit} />
					<KitRowCard kit={CommuterKit} />

					<br/>
					<h4 className="fw-bold text-center my-4 pt-3">
						Special Kits
					</h4>

					<KitRowCard kit={FamilyKit} special={true} />
					<KitRowCard kit={ShortTermKit} special={true} />

				</div>

				<br/><br/>
				<LikeNothing />
				
				
			</div> </React.Fragment>
    );
}

export default Home;