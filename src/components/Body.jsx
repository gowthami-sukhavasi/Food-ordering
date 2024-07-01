import resList from "../utils/data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  console.log(resList);
  return (
    <div className="body-container">
      <input className="search-bar" type="search" placeholder="Search here" />
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
