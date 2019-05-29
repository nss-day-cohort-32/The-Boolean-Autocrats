import React, { Component } from "react";

class TaskList extends Component {
  render() {
    return (
      <section className="tasks">
        <h2>All Tasks</h2>
        <div className="taskButton">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              this.props.history.push("/tasks/new");
            }}
          >
            Add TaskList
          </button>
        </div>
        {this.props.tasks.map(item => {})}
      </section>
    );
  }
}

export default TaskList;
