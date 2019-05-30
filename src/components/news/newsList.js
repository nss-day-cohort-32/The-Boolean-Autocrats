import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class NewsList extends Component {
  render() {
    return (
      <article>
        <h1>News</h1>
        <hr />

        <Button
          color="primary"
          type="button"
          onClick={() => {
            this.props.history.push("/news/new");
          }}
        >
          Add News Article
        </Button>

        {this.props.news.map(news => (
          <div key={news.id}>
            <h3>{news.title}</h3>

            <Button
              color="info"
              type="button"
              onClick={() => {
                this.props.history.push(`/news/${this.props.news.id}/edit`);
              }}
            >
              Edit
            </Button>

            <div>
              <Link to={`/news/${news.id}`}>Details</Link>
            </div>

            <div>
              <Button
                color="success"
                size="sm"
                onClick={() => this.props.deleteNews(news.id)}
              >
                Delete News Article
              </Button>
            </div>
          </div>
        ))}
      </article>
    );
  }
}

export default NewsList;
