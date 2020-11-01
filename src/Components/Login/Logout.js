import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <Redirect to="/" />
      // <div>
      //   <h1>You have been logged out!!!</h1>
      //   <Link to="/">Login Again</Link>{" "}
      // </div>
    );
  }
}
