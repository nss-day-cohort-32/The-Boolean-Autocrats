import React, { Component } from "react";
// import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class News extends Component {
  render() {
    return (
      <section>
        <div key={this.props.news.id}>
          <h3>{this.props.news.title}</h3>
          <p>{this.props.news.synopsis}</p>
          <Link to={this.props.news.url}>News Link</Link>

          {/* <Button color="primary" onClick={this.props.history.push("/news")}>
            Back
          </Button> */}
        </div>
      </section>
    );
  }
}

export default News;
