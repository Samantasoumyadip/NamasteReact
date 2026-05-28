import Restaurant from "./Restaurant";
import resList from "../utils/reslist";
import { useState, useEffect } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5656801&lng=88.5143351&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // Optional chaining is used to avoid errors in case any of the properties in the chain are undefined or null
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body">
        <div className="Filter">  
        <button className="filter-btn" 
        onClick={() => {
            const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.2);
            setListOfRestaurants(filteredList);
        }}
        >Top Rated Restaurants</button>
        </div>
        <div className="res-container"> 
        {
        listOfRestaurants.map(restaurant => (<Restaurant resData = {restaurant} key={restaurant.info.id} />
        ))}
        </div>
        </div>
    );
};

export default Body;