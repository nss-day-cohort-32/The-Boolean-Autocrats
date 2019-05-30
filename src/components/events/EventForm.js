import React, { Component } from "react";


export default class EventForm extends Component {
    // Set initial state
    state = {
        eventName: "",
        date: "",
        location: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewEvent = evt => {
        evt.preventDefault();

            const event = {
                name: this.state.eventName,
                date: this.state.date,
                location:this.state.location,
                
                
            };

            // Create the event and redirect user to event list
            this.props
                .addEvent(event)
                .then(() => this.props.history.push("/events"));
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="eventName"
                            placeholder="Event Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            placeholder="Date"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Location"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEvent}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}