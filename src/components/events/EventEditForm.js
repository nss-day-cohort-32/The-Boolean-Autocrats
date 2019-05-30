import React, { Component } from "react"
import EventManager from "../../modules/EventManager"

export default class EventEditForm extends Component {
    // Set initial state
    state = {
      eventName: "",
      date: "",
      location: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()

        const editedEvent = {
          id: this.props.match.params.eventId,
          name: this.state.eventName,
          date: this.state.date,
          location: this.state.location
        };

    this.props.updateEvent(editedEvent)
    .then(() => this.props.history.push("/events"))      
    }
  

    componentDidMount() {
      EventManager.get(this.props.match.params.eventId)
      .then(event => {
        this.setState({
          eventName: event.name,
          date: event.date,
          location: event.location
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="eventForm">
            <div className="form-group">
              <label htmlFor="eventName">Event name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="eventName"
                value = {this.state.eventName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value = {this.state.date}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">location</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="location"
                value = {this.state.location}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingEvent}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}