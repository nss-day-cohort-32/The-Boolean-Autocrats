import React, { Component } from 'react';
import TaskManager from "../../modules/TaskManager"
import { Button, Card, Col } from "reactstrap"


export default class TaskEditForm extends Component {

    state = {
        name: "",
        info: ""
    }
 
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }
 
    updateExistingTask = evt => {
        evt.preventDefault()
 
        const editedTask = {
            id: this.props.match.params.taskId,
            name: this.state.name,
            info: this.state.info
        };
 
        this.props.updateTasks(editedTask)
            .then(() => this.props.history.push("/tasks"))
    }
    componentDidMount() {
        TaskManager.get(this.props.match.params.taskId)
            .then(tasks => {
                this.setState({
                    name: tasks.name,
                    info: tasks.info
                });
            });
    }
    render() {
        return (
            <>  <Card style={{ width: "20em", height: "20em" }}>
 
                <Col md="auto">
                    <form className="taskForm">
 
                        <div className="form-group">
                            <label htmlFor="name">Task name</label>
                            <input
                                type="text"
                                required
                                // className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                value={this.state.name || ""}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="info">Info</label>
                            <input
                                type="text"
                                required
                                // className="form-control"
                                onChange=
                                {this.handleFieldChange}
                                id="info"
                                value={this.state.info || ""}
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                color="danger"
                                size="sm"
                                onClick={this.updateExistingTask}
                            >Submit</Button>
                        </div>
 
 
                    </form>
                </Col>
 
            </Card>
            </>
        );
    }
 }