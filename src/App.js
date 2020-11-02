import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import Login from "./Components/Login/Login";
import Logout from "./Components/Login/Logout";
import SignUp from "./Components/Login/Signup";
import Forgot from "./Components/Login/ForgotPassword";
import Sidebar from "./Components/Sidebar";
import MobileList from "./Components/MobileList";
import FridgeList from "./Components/FridgeList";

function App() {
  return (
    // <React.Fragment>
    //   <Navbar></Navbar>
    <Router>
      {/* <div id="page-wrap">
          <h1>Cool Restaurant</h1>
          <h2>Check out our offerings in the sidebar!</h2>
        </div> */}

      {/* <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={Forgot} />

        <Route path="/productList">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <ProductList />
        </Route>

        <Route path="/mobileList">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <MobileList />
        </Route>
        <Route path="/fridgeList">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <FridgeList />
        </Route>

        <Route path="/details">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <Details />
        </Route>

        <Route path="/cart">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <Cart />
        </Route>

        <Route>
          <Default />
        </Route>
      </Switch>
      <Modal />
    </Router>
    // <Modal />
    //{" "}
    // </React.Fragment>

    // <Router>
    //   <div className="App">
    //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //       <div className="container">
    //         <Link className="navbar-brand" to={"/login"}>
    //           {/* positronX.io */}
    //         </Link>
    // <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //   <ul className="navbar-nav ml-auto">
    //     <li className="nav-item">
    //       <Link className="nav-link" to={"/login"}>
    //         Login
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to={"/signup"}>
    //         Sign up
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    //       </div>
    //     </nav>

    //     <div className="auth-wrapper">
    //       <div className="auth-inner">
    //         <Switch>
    //           <Route exact path="/" component={Login} />

    //           <Route path="/login" component={Login} />
    //           <Route path="/logout" component={Logout} />

    //           <Route path="/productList" component={ProductList} />

    //           <Route path="/details" component={Details} />
    //           <Route path="/cart" component={Cart} />
    //           <Route path="/signup" component={SignUp} />
    //           <Route component={Default} />
    //         </Switch>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
