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
    </Menu>
  );
};
