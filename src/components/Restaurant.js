import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const { resData } = props;
    const { name, avgRating, cloudinaryImageId, cuisines, costForTwo, sla } = resData.info;  // Destructuring the resData.info object to get the required properties
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h2> {name} </h2>
            <h3> {avgRating} Stars </h3>
            <h3> {sla.deliveryTime + " mins"} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {costForTwo} </h4>
        </div>
    );
};

export default Restaurant;
