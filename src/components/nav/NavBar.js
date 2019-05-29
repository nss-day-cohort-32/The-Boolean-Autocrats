import React, { Component } from "react"
import { Link } from "react-router-dom"



class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ol className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                   
                </ol>
            </nav>
        )
    }
}

export default NavBar