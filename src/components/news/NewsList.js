import React, { Component } from "react";
import { Button } from "reactstrap";

class NewsList extends Component {
  render() {
    return (
      <article>
        <h1>News</h1>
        <hr />

        <div>
          <Button
            color="primary"
            type="button"
            onClick={() => {
              this.props.history.push("/news/new");
            }}
          >
            Add News Article
          </Button>
        </div>

        {this.props.allNews.map(news => (
          <div key={news.id}>
            <h3>{news.title}</h3>

            <Button
              color="info"
              type="button"
              onClick={() => {
                this.props.history.push(`/news/${news.id}/edit`);
              }}
            >
              Edit
            </Button>

            <div>
              <Button
                onClick={() => {
                  this.props.history.push(`/news/${news.id}`);
                }}
              >
                Details
              </Button>
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
            <hr />
          </div>
        ))}
      </article>
    );
  }
}

export default NewsList;