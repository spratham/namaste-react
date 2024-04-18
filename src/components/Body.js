import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

export default BodyComponent = () => {
  // State variable to hold the list of restaurants
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    const searchedList = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText)
    );
    setListOfRestaurant(searchText.length ? searchedList : resList); //Render whole list after clearing the search
  };
  return (
    <div className="body-container">
      <div className="search">
        <input
          placeholder="Search your favorite restaurant..."
          onChange={handleSearchChange}
        />
        <button type="submit" className="filter-btn">
          Search
        </button>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            //filter Logic
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log(filteredList);
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
