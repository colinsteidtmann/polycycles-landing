import React from "react";
import { Link, useParams } from "react-router-dom";
// components
import KitInfoCard from "./KitInfoCard";
import { BackButton, Accordian, IconList, KitBikes, LikeNothing, FeedbackForm, PageBanner, ScrollToTop } from "#components";
import { RaceKit, PerformanceKit, SportKit, CommuterKit, FamilyKit, ShortTermKit, AllKits, GeneralGuidelines } from "#constants";

export const IndividualKit = () => {

    const { kitType } = useParams();
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

    return ( 
    	<React.Fragment>
    	<ScrollToTop />
        <div className="mx-1 mx-sm-auto m-md-3">
				<BackButton />

				<PageBanner
					bgImg={kit.bgImageClass}
					text={kit.title}
					cols="col-12 col-lg-10 col-xl-9"
				/>

				<div className="row justify-content-center pt-2 mb-5 gx-0 gy-3 gy-xl-5">

					
					<div className="col-12 col-lg-10 col-xl-9">
						<FeedbackForm />
					</div>

					<div class="col-12 col-lg-10 col-xl-9">
						<KitInfoCard 
							kit={kit}
						/>
					</div>

					<div class="col-12 col-lg-10 col-xl-9">
						<Accordian id="AllKits" flush={true}>
							<Accordian.Item id="One">
								<Accordian.Header>
									Included in all our kits
								</Accordian.Header>
								<Accordian.Body>
									<div className="text-start">
										<IconList list={AllKits.featuresList} />
									</div>
								</Accordian.Body>
							</Accordian.Item>

							<Accordian.Item id="Two">
								<Accordian.Header>
									General guidelines
								</Accordian.Header>
								<Accordian.Body>
									<div className="text-start">
										<IconList list={GeneralGuidelines.rulesList} />
									</div>
								</Accordian.Body>
							</Accordian.Item>
						</Accordian>
					</div>
					
					{
						kit.bikeList &&
						<React.Fragment>
							<div className="col-12 col-lg-10 col-xl-9">
								<br/>
								<h5 className="text-center fw-normal my-3">
									Sample Bikes
								</h5>
								<KitBikes bikesData={kit.bikeList} />
							</div>
						</React.Fragment>
					}	
				</div>

				<LikeNothing />

			</div> </React.Fragment>
    );
}

export default IndividualKit;