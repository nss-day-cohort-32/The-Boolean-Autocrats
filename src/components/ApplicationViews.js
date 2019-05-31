import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import EventManager from "../modules/EventManager";
import EventDetail from "./events/EventDetail";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import NewsEditForm from "./news/NewsEditForm";
import NewsManager from "../modules/NewsManager";
import NewsForm from "./news/NewsForm";
import NewsList from "./news/NewsList"
import NewsDetail from "./news/NewsDetail";
import TaskForm from "./tasks/TaskForm";
import TaskList from "./tasks/TaskList";
import TaskManager from "../modules/TaskManager"
import TaskEditForm from "./tasks/TaskEditForm"

import Register from "./userlogin/Register";
import Login from "./userlogin/Login";

class ApplicationViews extends Component {
  state = {
    news: [],
    tasks: [],
    events: []
  }

  deleteNews = (id) => {
    NewsManager.delete(id).then((news) => {
      this.props.history.push("/news");
      this.setState({ news: news });
    });
  };

  addNews = (news) =>
    NewsManager.post(news)
  deleteEvent = id => {
    console.log("props", this.props.history);
    const newState = {};
    return EventManager.deleteEvent(id)
      .then(() => EventManager.getAll())
      .then(events => {
        console.log("events", events);
        newState.events = events;
      })
      .then(() => {
        this.setState(newState);
      });
  };

  addEvent = event =>
    EventManager.post(event)
      .then(() => EventManager.getAll())
      .then(events =>
        this.setState({
          events: events
        })
      );

  updateEvent = editedEventObject => {
    return EventManager.put(editedEventObject)
      .then(() => EventManager.getAll())
      .then(events => {
        this.setState({
          events: events
        });
      });
  };

  updateTasks = editedTaskObject => {
    return TaskManager.edit(editedTaskObject)
      .then(() => TaskManager.getAll())
      .then(tasks => {
        this.setState({
          tasks: tasks
        })
      })
  }

  deleteNews = id => {
    NewsManager.delete(id)
      .then(NewsManager.getAll)
      .then(news => {
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


  addNews = article =>
    NewsManager.post(article)
      .then(() => NewsManager.getAll())
      .then((news) =>
        this.setState({
          news: news
        })
      );


  updateNews = editedNewsObject => {
    return NewsManager.edit(editedNewsObject)
      .then(() => NewsManager.getAll())
      .then((news) => {
        this.setState({
          news: news
        });
      });
  };

  componentDidMount() {
    NewsManager.getAll().then(news => {
      this.setState({
        news: news
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
        }} />
        <Route
          path="/register"
          render={(props) => {
            return (
              <Register
                {...props}
                addUser={this.props.addUser}
                users={this.props.users}
                registerIt={this.props.registerIt}
                getAll={this.props.getAllUsers}
              />
            );
          }}
        />

        <Route path="/tasks/:taskId(\d+)/editForm" render={props => {
          return <TaskEditForm {...props} updateTasks={this.updateTasks} />
        }} />

        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <Login
                {...props}
                populateAppState={this.props.populateAppState}
                registerIt={this.props.registerIt}
              />
            );
          }}
        />


        <Route
          path="/events/new"
          render={props => {
            return <EventForm {...props} addEvent={this.addEvent} />;
          }}
        />

        <Route
          exact
          path="/news"
          render={(props) => {
            return (
              <NewsList
                {...props}
                allNews={this.state.news}
                deleteNews={this.deleteNews}
              />
            );
          }}
        />

        <Route
          path="/news/new"
          render={props => {
            return <NewsForm {...props} addNews={this.addNews} />;
          }}
        />

        <Route
          exact
          path="/news/:newsId(\d+)"
          render={props => {
            let news = this.state.news.find(
              news => news.id === parseInt(props.match.params.newsId)
            );
            if (!news) {
              news = {
                id: 404,
                name: "404",
                position: "News not found"
              };
            }
            return <NewsDetail news={news} />;
          }}
        />

        <Route
          path="/news/:newsId(\d+)/edit"
          render={props => {
            return <NewsEditForm {...props} updateNews={this.updateNews} />;
          }}
        />
      </>
    );
  }
}

export default withRouter(ApplicationViews);
