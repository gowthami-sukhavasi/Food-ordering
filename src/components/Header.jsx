import { HEADER_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <img alt="logo" className="logo" src={HEADER_LOGO} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <img alt="restaurant-logo" src={USER_ICON} height="80px" width="80px" />
    </div>
  );
};

export default Header;
