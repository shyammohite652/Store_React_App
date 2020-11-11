import React from "react";
import "../Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Menu>
      <Link to="/productList"> Home </Link>
      <Link to="/productList/fridge"> Refrigerators </Link>
      <Link to="/productList/mobile"> Mobiles </Link>
      <Link to="/logout"> Logout </Link>
    </Menu>
  );
};
