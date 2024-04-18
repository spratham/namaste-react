import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

export default BodyComponent = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body-container">
      <div className="search">
        <input placeholder="Search your favoraite restaurant..."></input>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            //filter Logic
            const filteredist = resList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredist);
            console.log(filteredist);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="cards-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
