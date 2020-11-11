import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super();
    let signedUp = false;
    this.state = {
      username: "",
      password: "",
      question: "",
      validate: false,
      signedUp
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    localStorage.setItem("question", this.state.question);

    if (
      !this.state.username ||
      !this.state.password ||
      !this.state.question ||
      !this.state.firstname ||
      !this.state.lastname
    ) {
      this.setState({
        validate: false
      });
    } else {
      this.setState({
        signedUp: true,
        validate: true
      });
    }
  }
  render() {
    if (this.state.signedUp) {
      return <Redirect to="/" />;
    }
    return (
      <div className="forms">
        <ul className="tab-group">
          <li className="tab">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="tab active">
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>

        <div className="auth-wrapper">
          <div className="auth-inner1">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Security Question</label>
                <br />
                <span className="mySpan"> What's your favourite color </span>
                <input
                  type="text"
                  name="question"
                  value={this.state.question}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Enter your answer"
                />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              {!this.state.validate ? (
                <span style={{ color: "red" }}>All fields are required!!!</span>
              ) : (
                ""
              )}

              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <p className="forgot-password text-right"></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
