import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import EventManager from '../modules/EventManager';
import EventDetail from './events/EventDetail'
import EventList from './events/EventList'
import EventForm from './events/EventForm'
import EventEditForm from './events/EventEditForm'





class ApplicationViews extends Component {
   
    state = {
        events: [],
        

    }
   
   




    deleteEvent = (id) => {
        const newState = {};
        EventManager.deleteEvent(id)
            .then(EventManager.getAll)
            .then(events => {
                console.log("events", events);
                newState.events = events
            })
            .then(() => {
                this.props.history.push("/events")
                this.setState(newState)
            })
    }


    addEvent = event =>
        EventManager.post(event)
            .then(() => EventManager.getAll())
            .then(events =>
                this.setState({
                    events: events
                })
            );


    updateEvent = (editedEventObject) => {
        return EventManager.put(editedEventObject)
            .then(() => EventManager.getAll())
            .then(events => {
                this.setState({
                    events: events
                })
            });
    };

    




    componentDidMount() {
        const newState = {};

        EventManager.getAll()
            .then(events =>
                newState.events = events)
            
            .then(() => this.setState(newState))

    }

    render() {
        return (
            <React.Fragment>
                

                
                <Route exact path="/events" render={(props) => {
                    return <EventList  {...props}
                        deleteEvent={this.deleteEvent}
                        events={this.state.events} />
                }} />
                <Route path="/events/new" render={(props) => {
                    return <EventForm {...props}
                        addEvent={this.addEvent}/>
                    
                }} />

                <Route exact path="/events/:eventId(\d+)" render={(props) => {
                    // Find the event with the id of the route parameter
                    let event = this.state.events.find(event =>
                        event.id === parseInt(props.match.params.eventId)
                    )


                    // If the event wasn't found, create a default one
                    if (!event) {
                        event = { id: 404, name: "404", location: "Location not found" }
                    }

                    return <EventDetail event={event}
                        {...props}
                        events={this.state.events}
                        deleteEvent={this.deleteEvent} />
                }} />
 
                 <Route path="/events/:eventId(\d+)/edit" render={props => {
                     return <EventEditForm {...props}  updateEvent={this.updateEvent} />
                 }}
              />

               


            </React.Fragment>

        )
    }
}

export default withRouter(ApplicationViews)