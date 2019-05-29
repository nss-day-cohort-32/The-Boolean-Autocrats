import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class EventCard extends Component {
    render() {
        return (
            <div key={this.props.event.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        
                        {this.props.event.name}
                        <Link className="nav-link" to={`/events/${this.props.event.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteEvent(this.props.event.id)}
                            className="card-link">Discharge</a>
                    </h5>
                </div>
            </div>
        )
    }
}