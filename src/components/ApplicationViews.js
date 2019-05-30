import { Route } from "react-router-dom";
import React, { Component } from "react";

import NewsList from "./news/NewsList";
// import NewForm from "./news/NewsForm";
import NewsManager from "../modules/NewsManager";

import Register from "./userlogin/Register";
import Login from "./userlogin/Login";

class ApplicationViews extends Component {
  state = {
    news: []
  };

  deleteNews = (id) => {
    NewsManager.delete(id).then((news) => {
      this.props.history.push("/news");
      this.setState({ news: news });
    });
  };

  addNews = (news) =>
    NewsManager.post(news)
      .then(() => NewsManager.getAll())
      .then((news) =>
        this.setState({
          news: news
        })
      );

  updateNews = (editedNewsObject) => {
    return NewsManager.put(editedNewsObject)
      .then(() => NewsManager.getAll())
      .then((news) => {
        this.setState({
          news: news
        });
      });
  };

  componentDidMount() {
    
    NewsManager.getAll().then((allNews) => {
      this.setState({
        news: allNews
      });
    });
  }

  render() {
    return (
      <>
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
          exact
          path="/news"
          render={(props) => {
            return (
              <NewsList
                {...props}
                news={this.state.news}
                deleteNews={this.deleteNews}
              />
            );
          }}
        />
      </>
    );
  }
}

export default ApplicationViews;
