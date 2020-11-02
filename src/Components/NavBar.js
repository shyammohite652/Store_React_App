import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    // const ConditionalLink = ({ children, to, condition }) =>
    //   !!condition && to ? <Link to={to}>{children}</Link> : <>{}</>;
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* <Link to="/">
        <Sidebar
           pageWrapId={"page-wrap"}
           outerContainerId={"outer-container"}
        />
        </Link> */}

        <Link to="/" className="logo">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>

        {/* <ConditionalLink
          to="/logout"
          condition={localStorage.getItem("token")}
          children="Logout"></ConditionalLink> */}

        {/* <Link to="/logout">
          {!localStorage.getItem("LoggedIn") ? "Logout" : ""}
        </Link> */}
        {/* <Link to="/logout">Logout</Link> */}
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
