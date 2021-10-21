import React from "react";
import { Component } from "react";
import locationData from "./locationData.json";

class Location extends Component {
  render() {
    return (
      <div className="location-gradient section">
        {Object.values(locationData.quad).map((value, i) => {
          return (
            <div className="center" key={i}>
              <h2 className="location-title">{[value]}</h2>

              <div className="location-top ">
                {/* <img src={locationDetails.imgTop} alt="img" /> */}
                <div>
                  {/* <h3>{locationDetails.services}</h3> */}
                  {/* <section>{locationDetails.servicesDescription}</section> */}
                </div>
              </div>
              <div className="location-bottom">
                <div>
                  {/* <h3>{locationDetails.destinations}</h3> */}
                  {/* <section>{locationDetails.destinationsDescription}</section> */}
                  {/* <img
                    className="location-quad-img"
                    src={locationDetails.vehicule}
                    alt="quad"
                  /> */}
                </div>
                {/* <img src={locationDetails.imgBottom} alt="img" /> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Location;
