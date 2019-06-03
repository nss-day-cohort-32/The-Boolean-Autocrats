import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  onLogin = (evt) => {
    evt.preventDefault();
    this.props
      .registerIt(this.state.userName, this.state.password)
      .then((allUsers) => {
        if (allUsers.length < 1) {
          alert("No user found");
        } else {
          allUsers.forEach((user) => {
            let loggedIn = false;
            if (
              this.state.userName === user.userName &&
              this.state.password === user.password
            ) {
              loggedIn = true;
            }
            if (loggedIn === true) {
              sessionStorage.setItem("User", user.id);
              this.props.populateAppState();
              this.props.history.push("/home");
            }
          });
        }
      });
  };

  componentDidMount() {
    if (sessionStorage.getItem("User") !== null) {
      sessionStorage.removeItem("User");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="">
            <h2>Welcome</h2>
            <p>Login or register here</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <form>
                <div className="">
                  <label htmlFor="UserName"> User Name: </label>
                  <input
                    type="text"
                    className=""
                    required
                    onChange={this.handleFieldChange}
                    id="userName"
                    placeholder="User Name"
                  />
                </div>

                <div className="">
                  <label htmlFor="Password">Password:</label>
                  <input
                    type="text"
                    className=""
                    required
                    onChange={this.handleFieldChange}
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button className="" type="submit" onClick={this.onLogin}>
                  {" "}
                  Submit{" "}
                </button>
                <p className="">
                  Not a User? <Link to="/register">Register Here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
