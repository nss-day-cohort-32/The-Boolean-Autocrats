import React, { Component } from "react";
import { Button } from "reactstrap";

class NewsList extends Component {
  render() {
    return (
      <article>
        <h1>News</h1>
        <hr />
        <Button color="primary">Add News Article</Button>
        {/* dropdown form?? */}
        {this.props.news.map(news => (
          <div key={news.id}>
            <h3>{news.title}</h3>
            {/* Ask if the details for an article should be a seperate page if wanted to be enlarged */}
            <p>{news.synopsis}</p>
            <p>{news.url}</p>
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
