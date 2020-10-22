import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storedProducts } from "../data";

export default class ProductList extends Component {
  state = {
    products: storedProducts
  };
  render() {
    console.log(this.state.storedProducts);
    return (
      //  <Product></Product>
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products"></Title>
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
