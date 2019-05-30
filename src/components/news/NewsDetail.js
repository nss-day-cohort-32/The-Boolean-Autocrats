import React, { Component } from "react";
import { Button } from "reactstrap";

class News extends Component {
  render() {
    return (
      <section>
        <div key={this.props.news.id}>
          <h3>{this.props.news.name}</h3>
          <p>{this.props.news.synopsis}</p>
          <a href={this.props.news.url}>News</a>
          <Button color="primary" onClick={this.props.history.push("/news")}>
            Back
          </Button>
        </div>
      </section>
    );
  }
}

export default News;
