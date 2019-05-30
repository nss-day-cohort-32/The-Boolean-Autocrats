import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";

import NewsList from "./news/NewsList";
import NewsEditForm from "./news/NewsEditForm";
import NewsManager from "../modules/NewsManager";
import NewsForm from "./news/NewsForm";
import NewsDetail from "./news/NewsDetail";

class ApplicationViews extends Component {
  state = {
    news: []
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
    return NewsManager.put(editedNewsObject)
      .then(() => NewsManager.getAll())
      .then(news => {
        this.setState({
          news: news
        });
      });
  };

  componentDidMount() {
    NewsManager.get(this.props.match.params.newsId).then(news => {
      this.setState({
        title: news.title,
        synopsis: news.synopsis,
        url: news.url
      });
    });

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
