import React, { Component } from "react";
import { Button, Calender } from 'reactstrap'

class TaskList extends Component {
  render() {
    return (
      <article>
        <h2>Tasks</h2>
        <hr />
        <Button color="primary" onClick={() => { this.props.history.push("/tasks/new") }}>Add New Task</Button>
        {this.props.tasks.map(task => (
          <div key={task.id}>
            <h3>{task.name}</h3>
            <h3>{task.info}</h3>

            <div>
              <Button
                color="success"
                size="sm"
                onClick={() => this.props.deleteTask(task.id)}>Delete Task
            </Button>
              <Button
                color="danger"
                size="sm"
                onClick={() => this.props.history.push(`/tasks/${task.id}/editForm`)}>Edit</Button>
            </div>
          </div>
        ))}
      </article>
    );
  }
}

export default TaskList;
