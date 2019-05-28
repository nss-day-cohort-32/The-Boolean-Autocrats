import React from 'react';
import { Navbar, NavItem, NavLink, Nav } from 'reactstrap'

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">stuff</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">stuff</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">stuff</NavLink>
                        </NavItem>

                    </Nav>
                </Navbar>
            </div>



        );
    }
}

export default NavBar;
