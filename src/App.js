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
//import MobileList from "./Components/MobileList";
//import FridgeList from "./Components/FridgeList";
import { ProductConsumer } from "./context";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={Forgot} />

        <Route exact path="/productList/fridge">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <ProductConsumer>
            {({ products }) => (
              <ProductList products={products} type="fridge" />
            )}
          </ProductConsumer>
        </Route>

        <Route exact path="/productList/mobile">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <ProductConsumer>
            {({ products }) => (
              <ProductList products={products} type="mobile" />
            )}
          </ProductConsumer>
        </Route>

        <Route path="/productList">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <ProductConsumer>
            {({ products }) => <ProductList products={products} />}
          </ProductConsumer>
        </Route>

        {/* <Route path="/mobileList/:catId" component={MobileList}>
     
        </Route> */}

        {/* <Route path="/fridgeList">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <FridgeList />
        </Route> */}

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
  );
}

export default App;
