import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      //  <Product></Product>
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
