import React from "react";
import "../Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Menu>
      <Link to="/productList"> Home </Link>
      <Link to="/fridgeList"> Refrigerators </Link>
      <Link to="/mobileList"> Mobiles </Link>
      <Link to="/logout"> Logout </Link>

      {/* <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Fridge
      </a>
      <a className="menu-item" href="/pizzas">
        Mobiles
      </a>
      <a className="menu-item" href="/desserts">
        Logout
      </a> */}
    </Menu>
  );
};
