import React, { Component } from "react";

class NewsForm extends Component {
  state = {
    newsTitle: "",
    synopsis: "",
    url: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNews = evt => {
    evt.preventDefault();
    const news = {
      title: this.state.newsTitle,
      synopsis: this.state.synopsis,
      url: this.state.url
    };
    this.props.addNews(news).then(() => this.props.history.push("/news"));
  };

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="newsTitle">Title:</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="newsTitle"
              placeholder="Title . . ."
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis:</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="synopsis"
              placeholder="Synopsis . . ."
            />
          </div>
          <div>
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="url"
              placeholder="URL . . ."
            />
          </div>
          <button type="submit" onClick={this.constructNews}>
            Submit News
          </button>
        </form>
      </>
    );
  }
}

export default NewsForm;
