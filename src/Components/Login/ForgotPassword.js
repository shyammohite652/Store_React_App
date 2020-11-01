import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class FPassword extends Component {
  constructor(props) {
    super();
    let resetDone = false;
    this.state = {
      username: "",
      question: "",
      newpassword: "",
      errorAns: false,
      errorUname: false,
      resetDone
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
    const { question, username } = this.state;
    let storedQuestion = localStorage.getItem("question");
    let storedUsername = localStorage.getItem("username");

    if (storedQuestion !== question) {
      this.setState({
        errorAns: true,
        errorUname: false
      });
    }

    if (storedUsername !== username) {
      this.setState({
        errorUname: true,
        errorAns: false
      });
    }

    if (storedQuestion === question && storedUsername === username) {
      localStorage.setItem("password", this.state.newpassword);
      this.setState({
        resetDone: true,
        errorAns: false,
        errorUname: false
      });
    }
  }
  render() {
    if (this.state.resetDone) {
      return <Redirect to="/" />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.submitForm}>
            <h3>Forgot Password</h3>

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
              <label>Security Question</label>
              <br />
              <spna className="mySpan"> What's your favourite color</spna>
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
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter New Password"
                value={this.state.newpassword}
                onChange={this.onChange}
                name="newpassword"
              />
            </div>

            {this.state.errorAns ? (
              <span style={{ color: "red" }}>
                {" "}
                Your answer is incorrect !!!
              </span>
            ) : (
              ""
            )}

            {this.state.errorUname ? (
              <span style={{ color: "red" }}>
                {" "}
                Your username is incorrect !!!
              </span>
            ) : (
              ""
            )}

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>

            <p className="forgot-password text-right">
              Login <Link to="/">again</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
