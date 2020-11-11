import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} products found.</div>
        <div className="col-md-4">
          <label>Order By :</label>
          <select
            children="form-control"
            value={this.props.sort}
            onChange={this.props.handleChangeSort}
          >
            <option value=""> Select</option>
            <option value="lowest"> Lowest to highest</option>
            <option value="highest"> Highest to lowest</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Filter :</label>
          <select
            children="form-control"
            value={this.props.size}
            onChange={this.props.handleChangeSize}
          >
            <option value=""> All</option>
            <option value="a"> Between $ 1 to 10 </option>
            <option value="b"> Between $ 11 to 20 </option>
            <option value="c"> $ 21 onwards </option>
          </select>
        </div>
      </div>
    );
  }
}
