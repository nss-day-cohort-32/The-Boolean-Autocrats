import React from "react";

import "./NavBar.css";
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/chatroom">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tasks">
                Tasks
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <a className="navbar-brand mx-auto" href="/">
            The Boolean Autocrats
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
