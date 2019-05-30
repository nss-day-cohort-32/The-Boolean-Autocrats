import React, { Component } from 'react';
import { Button } from "reactstrap"

class TaskForm extends Component {

    state = {
        name: "",
        info: ""
    }
    handelFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    ConstructTask = evt => {
        evt.preventDefault();
        const tasks = {
            name: this.state.name,
            info: this.state.info
        };
        this.props.addTask(tasks).then(() => this.props.history.push("/tasks"));
    }

    render() {
        return (
            <>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={this.handelFieldChange}
                            id="name"
                            placeholder="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="info">Info</label>
                        <input
                            type="text"
                            required
                            onChange={this.handelFieldChange}
                            id="info"
                            placeholder="info"
                        />
                    </div>
                    <Button className="primary"
                        type="submit"
                        onClick={this.ConstructTask}>Save</Button>
                </form>
            </>
        );
    }
}

export default TaskForm;
