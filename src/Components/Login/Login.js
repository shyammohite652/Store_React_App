import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }

    this.state = {
      username: "",
      password: "",
      error: false,
      loggedIn
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
    const { username, password } = this.state;

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      localStorage.setItem("token", "ashjsdjsassd");
      localStorage.setItem("loggedIn", true);
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        error: true
      });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/productList" />;
    }
    return (
      <div className="forms">
        <ul className="tab-group">
          <li className="tab active">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="tab">
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>

        <div className="auth-wrapper">
          <div className="auth-inner1">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  name="password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              {this.state.error ? (
                <span style={{ color: "red" }}>
                  Username or password is incorrect !!!
                </span>
              ) : (
                ""
              )}

              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>

              <p className="forgot-password text-right">
                Forgot <Link to="/forgot">password?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
