import React, { Component } from "react";

class NewsForm extends Component {
  state = {
    title: "",
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
    if (
      this.state.title === "" ||
      this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("Please fill in the input fields.");
    } else {
      const news = {
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url
      };
      this.props.addNews(news);
      this.props.history.push("/news");
    }
  };

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="title"
              placeholder="Title . . ."
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="synopsis"
              placeholder="Synopsis . . ."
            />
          </div>
          <div>
            <label htmlFor="url">URL: </label>
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
