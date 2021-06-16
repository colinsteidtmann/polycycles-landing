import React from "react";
import {Link, useParams} from "react-router-dom";
// components
import KitInfoCard from "./KitInfoCard";
import {BackButton, Accordian, IconList, KitBikes, LikeNothing, FeedbackForm} from "#components";
import {RaceKit, PerformanceKit, SportKit, CommuterKit, FamilyKit, ShortTermKit, AllKits, GeneralGuidelines} from "#constants";

export const IndividualKit = () => {

	const {kitType} = useParams();
	let kit;
	if (kitType === "race") {
		kit = RaceKit;
	} else if (kitType === "performance") {
		kit = PerformanceKit;
	} else if (kitType === "sport") {
		kit = SportKit;
	} else if (kitType === "commuter") {
		kit = CommuterKit;
	} else if (kitType === "family") {
		kit = FamilyKit;
	} else if (kitType === "short-term") {
		kit = ShortTermKit;
	}

	return(
		<>
			<div class="m-3">
				<BackButton />

				<div class={"row gx-0 col-9 mx-auto py-5 mb-5 " + kit.bgImageClass} style={{"min-height": "45vh"}}>
					<h1 class="fw-normal text-center text-light align-self-center">
						{kit.title}
					</h1>
				</div>


				<div class="row gx-0 justify-content-center gy-5">
					

					<div class="col-9">
						<FeedbackForm />
					</div>


					<div class="col-9">
						<KitInfoCard 
							kit={kit}
						/>
					</div>

					<div class="col-9">
						<Accordian id="AllKits" flush={true}>
							<Accordian.Item id="One">
								<Accordian.Header>
									Included in all our kits
								</Accordian.Header>
								<Accordian.Body>
									<div class="text-start">
										<IconList list={AllKits.featuresList} />
									</div>
								</Accordian.Body>
							</Accordian.Item>

							<Accordian.Item id="Two">
								<Accordian.Header>
									General guidelines
								</Accordian.Header>
								<Accordian.Body>
									<div class="text-start">
										<IconList list={GeneralGuidelines.rulesList} />
									</div>
								</Accordian.Body>
							</Accordian.Item>
						</Accordian>

						{
							kit.bikeList &&
							<>
								<h5 class="text-center fw-normal my-3">
									Sample Bikes
								</h5>
								<KitBikes bikesData={kit.bikeList} />
							</>
						}

						<LikeNothing />
					</div>





				</div>


			</div>
		</>
	);
}

export default IndividualKit;