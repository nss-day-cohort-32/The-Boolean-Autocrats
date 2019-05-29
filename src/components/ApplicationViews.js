import { Route } from "react-router-dom";
import React, { Component } from "react";

import NewsList from "./news/NewsList";
// import NewForm from "./news/NewsForm";
import NewsManager from "../modules/NewsManager";

class ApplicationViews extends Component {
  state = {
    news: []
  };

  deleteNews = id => {
    NewsManager.delete(id).then(news => {
      this.props.history.push("/news");
      this.setState({ news: news });
    });
  };

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
      </>
    );
  }
}

export default ApplicationViews;
