
import { Link } from "react-router-dom"
import React from "react";
import { Navbar, NavItem, NavLink, Nav } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/news">
                <h4>News</h4>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events">
                <h4>Events</h4>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tasks">
                <h4>Tasks</h4>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/friends">
                <h4>Friends</h4>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
