// import React from "react";
import { CDN_URL } from "../utils/constants.js";

export default RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="card">
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="img"
      ></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  );
};
``