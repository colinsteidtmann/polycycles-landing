import React from "react";
import {useParams, Link} from "react-router-dom";
// components
import {BackButton, Carousel, Accordian, GoogleForm} from "#components";
import {AvailabilityOptions} from "#constants/bikes";
const BikeListings = require("#data/BikeListingForm");

const AvailabilityButtons = (props) => {
    const {availabilityList} = props;
    return (
        AvailabilityOptions.map((availability, id) => {
            if (availabilityList.includes(availability)) {
                return (
                    <button type="button" class="btn btn-outline-secondary my-1 my-lg-0 mx-2">
                        {availability}
                    </button>
                ) 
            } else {
                return (
                    <button type="button" class="btn btn-outline-secondary my-1 my-lg-0 mx-2">
                        <del>{availability}</del>
                    </button>
                ) 
            }
        })
    );
} 

const BikeComponent = (props) => {
    const { label, info } = props;
    
    if (!info || info.length === 0) {
        return null
    }

    return (
        <li className="list-group-item bg-transparent">

            <div className="row text-start ">
                <div className="col-6 ">
                    <strong>{label}</strong>
                </div>
                <div className="col-6 text-end ">
                    {info}
                </div>
            </div>
             
        </li>
    );
}

export const DetailsContent = () => {
    const {id} = useParams();
    const bike = BikeListings.find(bike => bike["id"] == id);
    return ( 
    	<React.Fragment>
            <div class="ms-2 ms-lg-5">
                <BackButton />
            </div>

            <div class="row py-2">
                <h1 class="text-center fw-normal">
                    Bikes Details
                </h1>
            </div>

            <div class="row justify-content-center py-2">
                <div class="col-11 col-lg-6 border ">
                    <div class="col-12 col-sm-8 col-lg-6 mx-auto">
                        <Carousel 
                            id="bikeDetails"
                            images={bike["Images"]}
                        />

                    </div>
                    <div class="row">

                        <ul className="list-group list-group-flush ">
                            <BikeComponent 
                                label="Bike Type"
                                info={`${bike["Bike Type"]}`}                         
                            />

                            <BikeComponent 
                                label="Price Per Month"
                                info={`$ ${bike["Price Per Month"]}`}
                            />
                        </ul>

                        <Accordian id="bikeDetails" flush={true}>
                            <Accordian.Item id="0">
                                <Accordian.Header>
                                    Availability
                                </Accordian.Header>
                                <Accordian.Body>
                                    <div class="text-start">
                                        <AvailabilityButtons
                                            availabilityList={bike["Availability"]}
                                        />
                                    </div>
                                </Accordian.Body>
                            </Accordian.Item>
                            <Accordian.Item id="1">
                                <Accordian.Header>
                                    Condition
                                </Accordian.Header>
                                <Accordian.Body>
                                    <ul className="list-group list-group-flush mb-3">
                                        <BikeComponent 
                                            label="Cockpit Condition"
                                            info={bike["Cockpit Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Drivetrain Condition"
                                            info={bike["Drivetrain Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Frame Condition"
                                            info={bike["Frame Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Tires Condition"
                                            info={bike["Tires Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Wheels Condition"
                                            info={bike["Wheels Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Suspension Condition"
                                            info={bike["Suspension Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Mechanic Notes"
                                            info={bike["Mechanic Notes on Bike Condition"]}
                                        />

                                        <BikeComponent 
                                            label="Bike Upgrades"
                                            info={bike["Bike Upgrades Notes"]}
                                        />
                                    </ul>

                                    <p class="text-start fw-bold ms-3">
                                        About the ratings:
                                    </p>
                                    <Accordian id="conditionInfo">
                                        <Accordian.Item id="conditionInfo1">
                                            <Accordian.Header>
                                                10/10 Rating:
                                            </Accordian.Header>
                                            <Accordian.Body>
                                                <p class="text-start fw-light">
                                                    <strong>As-new</strong><br/>
                                                    These bicycles are good as new, often built right out of the box from the manufacturer. Original stickers, parts, and accessories are included. The frame and wheels might have minor blemishes or scuffs from transportation or showroom display. Drivetrain, levers, cockpit, and suspension (where applicable) are in new condition.
                                                </p>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                        <Accordian.Item id="conditionInfo2">
                                            <Accordian.Header>
                                                9/10 Rating:
                                            </Accordian.Header>
                                            <Accordian.Body>
                                                <p class="text-start fw-light">
                                                    <strong>Excellent</strong><br/>
                                                    While these bikes have been ridden, they remain in excellent condition. Frame and wheels show slight signs of wear with only minor scuffs and scratches — no paint chipping. The drivetrain shows light wear but the derailleurs, shifters, and levers have not sustained any damage. The cockpit has light wear, primarily on the grips or handlebar tape. Bikes with suspension components have minor scuffs and scratches on the fork legs and shock, and the stanchions are immaculate.
                                                </p>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                        <Accordian.Item id="conditionInfo3">
                                            <Accordian.Header>
                                                8/10 Rating:
                                            </Accordian.Header>
                                            <Accordian.Body>
                                                <p class="text-start fw-light">
                                                    <strong>Very Good</strong><br/>
                                                    To earn a rating in this range, bicycles have sustained some wear but no significant damage. The frame will have slight paint loss, scratches, and/or scuffs. Wheels will also have minor cosmetic damage on rims, spokes, and/or hubs. The drivetrain will have wear from normal usage and there will be slight scratches and scuffs on derailleurs, shifters, and levers. Cockpit, saddle, and suspension lowers (where applicable) will also have cosmetic scuffs and scratches.                    
                                                </p>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                        <Accordian.Item id="conditionInfo4">
                                            <Accordian.Header>
                                                7/10 Rating:
                                            </Accordian.Header>
                                            <Accordian.Body>
                                                <p class="text-start fw-light">
                                                    <strong>Good</strong><br/>
                                                    Bikes in this range are well-loved and have moderate wear. While the frame and wheels will have cosmetic scuffs, scratches, and/or paint loss, they will not be structurally damaged. Aluminum, steel, and titanium frames may have minor dents. Carbon frames may have been previously damaged, but have been professionally repaired and are structurally sound. Aluminum rims may have minor dents. The drivetrain has moderate to heavy wear. Handlebars, stem, derailleurs, and levers show moderate scuffing or scratches, and the saddle might have slight tears. If the bike has suspension, those components will have scratches and scuffs. The stanchions may have small scratches.
                                                </p>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                        <Accordian.Item id="conditionInfo5">
                                            <Accordian.Header>
                                                6-1/10 Rating:
                                            </Accordian.Header>
                                            <Accordian.Body>
                                                <p class="text-start fw-light">
                                                    <strong>Unacceptable</strong><br/>
                                                    We do not sell bikes that we rate lower than 6 on the condition scale. For example, this includes bikes with major dents, carbon fiber damage, excessive drivetrain wear, and/or moderate to significant suspension component wear.
                                                </p>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                    </Accordian>
                                </Accordian.Body>
                            </Accordian.Item>
                            <Accordian.Item id="2">
                                <Accordian.Header>
                                    Specifications
                                </Accordian.Header>
                                <Accordian.Body>
                                    <ul className="list-group list-group-flush">
                                        <BikeComponent 
                                            label="Year"
                                            info={bike["Bike Year"]}
                                        />

                                        <BikeComponent 
                                            label="Bike Brand"
                                            info={bike["Bike Brand"]}
                                        />

                                        <BikeComponent 
                                            label="Bike Model"
                                            info={bike["Bike Model"]}
                                        />

                                        <BikeComponent 
                                            label="Bike Size"
                                            info={bike["Bike Size"]}
                                        />

                                        <BikeComponent 
                                            label="Frame Material"
                                            info={bike["Frame Material"]}
                                        />

                                        <BikeComponent 
                                            label="Drivetrain"
                                            info={bike["Drivetrain"]}
                                        />

                                        <BikeComponent 
                                            label="Bike Weight"
                                            info={bike["Bike Weight"]}
                                        />

                                        <BikeComponent 
                                            label="Fork"
                                            info={bike["Fork"]}
                                        />

                                        <BikeComponent 
                                            label="Fork Travel"
                                            info={bike["Fork Travel"]}
                                        />

                                        <BikeComponent 
                                            label="Rear Shock"
                                            info={bike["Rear Shock"]}
                                        />

                                        <BikeComponent 
                                            label="Rear Shock Travel"
                                            info={bike["Rear Shock Travel"]}
                                        />

                                        <BikeComponent 
                                            label="Brakes"
                                            info={bike["Brakes"]}
                                        />

                                        <BikeComponent 
                                            label="Shifters"
                                            info={bike["Shifters"]}
                                        />

                                        <BikeComponent 
                                            label="Front Derailleur"
                                            info={bike["Front Derailleur"]}
                                        />

                                        <BikeComponent 
                                            label="Crankset"
                                            info={bike["Crankset"]}
                                        />

                                        <BikeComponent 
                                            label="Cassette"
                                            info={bike["Cassette"]}
                                        />

                                        <BikeComponent 
                                            label="Chain"
                                            info={bike["Chain"]}
                                        />

                                        <BikeComponent 
                                            label="Handlebar"
                                            info={bike["Handlebar"]}
                                        />

                                        <BikeComponent 
                                            label="Stem"
                                            info={bike["Stem"]}
                                        />

                                        <BikeComponent 
                                            label="Seatpost"
                                            info={bike["Seatpost"]}
                                        />

                                        <BikeComponent 
                                            label="Seatpost Travel"
                                            info={bike["Seatpost Travel"]}
                                        />

                                        <BikeComponent 
                                            label="Saddle"
                                            info={bike["Saddle"]}
                                        />

                                        <BikeComponent 
                                            label="Wheelset"
                                            info={bike["Wheelset"]}
                                        />

                                        <BikeComponent 
                                            label="Front Tire"
                                            info={bike["Front Tire"]}
                                        />

                                        <BikeComponent 
                                            label="Rear Tire"
                                            info={bike["Rear Tire"]}
                                        />

                                        <BikeComponent 
                                            label="Tire Type"
                                            info={bike["Tire Type"]}
                                        />

                                        <BikeComponent 
                                            label="Motor"
                                            info={bike["Motor"]}
                                        />

                                        <BikeComponent 
                                            label="Torque"
                                            info={bike["Torque"]}
                                        />

                                        <BikeComponent 
                                            label="Wattage"
                                            info={bike["Wattage"]}
                                        />

                                        <BikeComponent 
                                            label="Battery"
                                            info={bike["Battery"]}
                                        />

                                        <BikeComponent 
                                            label="Top Speed"
                                            info={bike["Top Speed"]}
                                        />

                                        <BikeComponent 
                                            label="Range"
                                            info={bike["Range"]}
                                        />

                                        <BikeComponent 
                                            label="Key Included"
                                            info={bike["Key Included"]}
                                        />

                                        <BikeComponent 
                                            label="Charger Included"
                                            info={bike["Charger Included"]}
                                        />
                                    </ul>
                                </Accordian.Body>
                            </Accordian.Item>
                        </Accordian>

                    </div>
                </div>
            </div>

            <div class="row my-4">
                <h1 class="text-center fw-normal">
                    Rent It
                </h1>
            </div>


            <div class="row justify-content-center">
                <div class="col-10 col-lg-6">
                    <p class="text-start fw-normal">
                        Fill out the form below to rent this bike. Once the owner approves the rental then we'll pick it up and deliver it to you. Before delivery, we'll inspect it to make sure that it's in good working order. When the rental duration ends, we'll pick the bike up, inspect it again, and do any service work. Besides normal wear and tear, the renter has to pay us to clean and fix the bike if necessary. We will price match guarantee with surrounding bike shops and be transparent about the work needed and performed. We also can provide discounted riding accessories and bike fits. If anything goes wrong while renting or if you have questions, then please contact us at <a className="fw-normal text-dark" href="mailto:friends@polycycles.com"> friends@polycycles.com</a> and we'll come take a look. 
                    </p>

                    <p class="text-start fw-normal">
                        Total cost: Rental charge + delivery and pickup (varies) + any service work done after the rental period.
                    </p>
                </div>
            </div>


            <GoogleForm
                webUrl="https://forms.gle/mU6DhNVxuE14HYXb6"
                iframeUrl="https://docs.google.com/forms/d/e/1FAIpQLSddG5jzhsj4jOr7ElDy6XPjBSf3qv3V4SqkuyawiVjG34WOHA/viewform?embedded=true"
                title="Rental Form"
            />
        
		</React.Fragment>
    );
}

export default DetailsContent;