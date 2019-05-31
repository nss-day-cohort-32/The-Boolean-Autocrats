
import React from "react";
import { Navbar, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/news">
                <h4 className="navigation-link">News</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/events">
                <h4 className="navigation-link">Events</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tasks">
                <h4 className="navigation-link">Tasks</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/friends">
                <h4 className="navigation-link">Chat</h4>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/friends">
                <h4 className="navigation-link">Friends</h4>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
