import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { Redirect } from "react-router-dom";
import Filter from "./Filter";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      count: 0,
      filteredProducts: props.products,
      products: props.products
    };

    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }
  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleChangeSize(e) {
    this.setState({ size: e.target.value });
    this.listProducts();
  }
  listProducts() {
    this.setState((state) => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size === "a") {
        return {
          filteredProducts: state.products.filter((item) => item.price <= 10)
        };
      } else if (state.size === "b") {
        return {
          filteredProducts: state.products.filter(
            (item) => item.price > 10 && item.price <= 20
          )
        };
      } else if (state.size === "c") {
        return {
          filteredProducts: state.products.filter((item) => item.price > 20)
        };
      }
      return { filteredProducts: state.products };
    });
  }

  UNSAFE_componentWillReceiveProps(props) {
    // this.setState(() => {
    //   return { count: props.products.length };
    // });
    console.log(props);
    let prod = [];
    if (!props.type) {
      prod = props.products;
    } else {
      prod = props.products.filter((item) => item.category === props.type);
    }

    this.setState(() => {
      return { count: prod.length, products: prod, filteredProducts: prod };
    });
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
            <Filter
              size={this.state.size}
              sort={this.state.sort}
              handleChangeSize={this.handleChangeSize}
              handleChangeSort={this.handleChangeSort}
              count={this.state.filteredProducts.length}
            >
              <hr />
            </Filter>
            <div className="row">
              {this.state.filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
