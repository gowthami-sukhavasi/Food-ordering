import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data.json";

const Header = () => {
  return (
    <div className="header-container">
      <img
        alt="logo"
        className="logo"
        src="https://images.vexels.com/media/users/3/301337/isolated/preview/971184588d50c01840d2e88c620ed4fb-food-goddess-international.png"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <img
        alt="restaurant-logo"
        src="https://cdn-icons-png.flaticon.com/256/6997/6997662.png"
        height="80px"
        width="80px"
      />
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant-logo"
      />
      <h3>{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

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

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
