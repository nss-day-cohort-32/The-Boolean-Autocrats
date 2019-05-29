import React, { Component } from 'react';
import EventItem from './EventItem';


export default class EventList extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="eventButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/events/new")}
                        }>
                    New Event
                </button>
            </div>
            <section className="events">
                <h2>All My Events</h2>
                {
                    this.props.events.map((item) => {
                        return <EventItem key={item.id} event={item} 
                        {...this.props}
                            deleteEvent={this.props.deleteEvent} />
                    })
                }
            </section>
            </React.Fragment>
            
        )
    }
}