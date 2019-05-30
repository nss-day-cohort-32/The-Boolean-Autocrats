import React, { Component } from "react";
import NewsManager from "../../modules/NewsManager";

class NewsEditForm extends Component {
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

  updateExistingNews = evt => {
    evt.preventDefault();

    if (
      this.state.title === "" ||
      this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("Please fill in input fields.");
    } else {
      const editedNews = {
        id: this.props.match.params.newsId,
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url
      };
      this.props
      .updateNews(editedNews).then(() => this.props.history.push("/news"));
    }
  };

  componentDidMount() {
    NewsManager.get(this.props.match.params.newsId).then(news => {
      this.setState({
        title: news.title,
        synopsis: news.synopsis,
        url: news.url
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="title">News Title:</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis:</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="synopsis"
              value={this.state.synopsis}
            />
          </div>
          <div>
            <label htmlFor="url">Url:</label>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="url"
              value={this.state.url}
            />
          </div>
          <button type="submit" onClick={this.updateExistingNews}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default NewsEditForm;
