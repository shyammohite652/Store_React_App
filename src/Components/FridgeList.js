import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { Redirect } from "react-router-dom";

export default class FridgeList extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products"></Title>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter((item) => item.category === "fridge")
                    .map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
