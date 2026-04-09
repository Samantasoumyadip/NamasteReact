import Restaurant from "./Restaurant";
import resList from "../utils/reslist";

const Body = () => {
    return (
        <div className="body">
        <div className="Search"> Search </div>
        <div className="res-container"> 
        {
        resList.map(restaurant => (<Restaurant resData = {restaurant} key={restaurant.info.id} />
        ))}
        </div>
        </div>
    );
};

export default Body;