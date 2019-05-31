import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import EventManager from "../modules/EventManager";
import EventDetail from "./events/EventDetail";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import XNewsList from "./news/NewsList";
import NewsEditForm from "./news/NewsEditForm";
import NewsManager from "../modules/NewsManager";
import NewsForm from "./news/NewsForm";
import NewsDetail from "./news/NewsDetail";

class ApplicationViews extends Component {
  state = {
    events: [],
    news: []
  };

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

  deleteNews = id => {
    NewsManager.delete(id)
      .then(NewsManager.getAll)
      .then(news => {
        this.props.history.push("/news");
        this.setState({ news: news });
      });
  };

  addNews = article =>
    NewsManager.post(article)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          news: news
        })
      );

  updateNews = editedNewsObject => {
    return NewsManager.edit(editedNewsObject)
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
    const newState = {};

    EventManager.getAll()
      .then(events => (newState.events = events))
      .then(NewsManager.getAll)
      .then(news => (newState.news = news))
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/events"
          render={props => {
            return (
              <EventList
                {...props}
                deleteEvent={this.deleteEvent}
                events={this.state.events}
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
          path="/events/:eventId(\d+)"
          render={props => {
            // Find the event with the id of the route parameter
            let event = this.state.events.find(
              event => event.id === parseInt(props.match.params.eventId)
            );

            // If the event wasn't found, create a default one
            if (!event) {
              event = { id: 404, name: "404", location: "Location not found" };
            }

            return (
              <EventDetail
                event={event}
                {...props}
                events={this.state.events}
                deleteEvent={this.deleteEvent}
              />
            );
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return <EventEditForm {...props} updateEvent={this.updateEvent} />;
          }}
        />
        <Route
          exact
          path="/news"
          render={props => {
            return (
              <XNewsList
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
