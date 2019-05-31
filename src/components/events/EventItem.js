import React, { Component } from 'react';
import { Link } from "react-router-dom";



class EventItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.event.id);
        this.setState(
           { saveDisabled: true },

       () => this.props.deleteEvent(this.props.event.id)
        )
    }

    render() {
        return (
            <article>
                <h3><q>{this.props.event.name}</q></h3>
                
                <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>
                < Link className="nav-link" to={`/events/${this.props.event.id}`}><button type="button">
          Detail
     </button></Link>
     < Link className="nav-link" to={`/events/${this.props.event.id}`}><button type="button">
          Favorite
     </button></Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/events/${this.props.event.id}/edit`);
                    }}
                >
                    Edit
            </button>
                <br /><hr />
            </article>
        )
    }
}

export default EventItem;