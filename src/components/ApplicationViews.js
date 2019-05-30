import { Route, /*Redirect*/ } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import EventManager from '../modules/EventManager';
import EventDetail from './events/EventDetail'
import EventList from './events/EventList'
import EventForm from './events/EventForm'
import EventEditForm from './events/EventEditForm'
import NewsList from "./news/NewsList";
// import NewForm from "./news/NewsForm";
import NewsManager from "../modules/NewsManager";
import TaskManager from "../modules/TaskManager"
import TaskList from "./tasks/TaskList"
import TaskForm from "./tasks/TaskForm"





class ApplicationViews extends Component {

  state = {
    news: [],
    tasks: [],
    events: []



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


  deleteNews = id => {
    NewsManager.delete(id).then(news => {
      this.props.history.push("/news");
      this.setState({ news: news });
    });
  };

  deleteTask = id => {
    TaskManager.delete(id)
      .then(TaskManager.getAll)
      .then(tasks => {
        this.props.history.push("/tasks");
        this.setState({ tasks: tasks });
      });
  };

  addTask = tasks =>
    TaskManager.post(tasks)
      .then(() => TaskManager.getAll())
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );

  addNews = news =>
    NewsManager.post(news)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          news: news
        })
      );

  updateNews = editedNewsObject => {
    return NewsManager.put(editedNewsObject)
      .then(() => NewsManager.getAll())
      .then(news => {
        this.setState({
          news: news
        });
      });
  };



  componentDidMount() {
    NewsManager.getAll().then(allNews => {
      this.setState({
        news: allNews
      });
    });
    TaskManager.getAll().then(allTasks => {
      console.log("allTasks", allTasks)
      this.setState({
        tasks: allTasks
      });
    });
    const newState = {};

    EventManager.getAll()
      .then(events =>
        newState.events = events)
      .then(NewsManager.getAll)
      .then(news =>
        newState.news = news)
      .then(() => this.setState(newState))



  }




  render() {
    return (
      <>
        <Route
          exact
          path="/news"
          render={props => {
            return (
              <NewsList
                {...props}
                news={this.state.news}
                deleteNews={this.deleteNews}
              />

            );
          }}
        />
        <Route exact path="/tasks" render={props => {
          return (
            <TaskList
              {...props}
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
            />
          )
        }}
        />
        <Route exact path="/events" render={(props) => {
          return <EventList  {...props}
            deleteEvent={this.deleteEvent}
            events={this.state.events} />
        }} />
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props}
            addEvent={this.addEvent} />

        }} />
        <Route path="/tasks/new" render={(props) => {
          return <TaskForm {...props}
            addTask={this.addTask} />
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
          return <EventEditForm {...props} updateEvent={this.updateEvent} />
        }}
        />
        <Route exact path="/news" render={props => {
          return (
            <NewsList {...props}
              news={this.state.news}
              deleteNews={this.deleteNews}
            />
          );
        }}
        />






      </>
    )
  }
}





export default withRouter(ApplicationViews);
