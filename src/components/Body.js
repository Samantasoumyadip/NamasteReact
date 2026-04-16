import Restaurant from "./Restaurant";
import resList from "../utils/reslist";
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
        <div className="Filter">  
        <button className="filter-btn" 
        onClick={() => {
            const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.4);
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