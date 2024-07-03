import { HEADER_LOGO, USER_ICON } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-container">
      <img alt="logo" className="logo" src={HEADER_LOGO} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            {isLoggedIn ? `Logout` : `Login`}
          </button>
        </ul>
      </div>
      <img alt="restaurant-logo" src={USER_ICON} height="80px" width="80px" />
    </div>
  );
};

export default Header;
