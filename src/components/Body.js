import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
export default BodyComponent = () => {
  // State variable to hold the list of restaurants
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("useEffect called");
    console.log(json);
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body-container">
      <div className="search">
        <input
          value={searchText}
          placeholder=" your favorite restaurant..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <span
          className="reset-search"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurant);
            setSearchText("");
          }}
        >
          x
        </span>
        <button
          onClick={() => {
            const searchedList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText)
            );
            setFilteredRestaurant(searchedList);
          }}
          type="submit"
          className="filter-btn"
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            //filter Logic
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            filteredRestaurant(filteredList);
            console.log(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="cards-container">
        {/* {filteredRestaurant.length === 0 ? (
          <Shimmer />
        ) : ( */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
