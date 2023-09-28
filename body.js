//Here, you are importing the RestaurantCard component, the useState hook from React, and some data from mockData.
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/mockData";

const Body = () => {

    /* You use the useState hook to create two state variables:

listofRestaurants: This state variable holds the list of restaurants, initially populated with data from resObj.restaurants.

filteredRestaurants: This state variable will hold the filtered list of restaurants when you click the "Top Rated Restaurants" button. */


    const [listofRestaurants] = useState(resObj.restaurants);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

/* This function, filterTopRatedRestaurants, is called when the "Top Rated Restaurants" button is clicked.

It filters the listofRestaurants array to include only those restaurants where the avgRating is greater than 4.3.

The filtered list is then set in the filteredRestaurants state variable using setFilteredRestaurants.*/

    const filterTopRatedRestaurants = () => {
        const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating > 4.3
        );
        setFilteredRestaurants(filteredList);
    };
    
/* In the JSX part, you create the UI for the Body component.
There's a button labeled "Top Rated Restaurants" that, when clicked, triggers the filterTopRatedRestaurants function.

Below the button, there's a div with the class res-container that renders the RestaurantCard component.

The RestaurantCard component is passed either the filteredRestaurants if there are filtered results, or listofRestaurants if there are no filters applied.*/

    return (
        <div className='body'>
            <div className="filter"> 
                <button
                    className="filter-btn"
                    onClick={filterTopRatedRestaurants}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                <RestaurantCard resData={filteredRestaurants.length > 0 ? filteredRestaurants : listofRestaurants} />
            </div>
        </div>
    );
};

export default Body;
