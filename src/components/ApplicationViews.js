import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router"
import NewsList from "./news/NewsList";
// import NewForm from "./news/NewsForm";
import NewsManager from "../modules/NewsManager";
import TaskManager from "../modules/TaskManager"
import TaskList from "./tasks/TaskList"

class ApplicationViews extends Component {
  state = {
    news: [],
    tasks: []
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
      </>
    );
  }
}

export default withRouter(ApplicationViews);
