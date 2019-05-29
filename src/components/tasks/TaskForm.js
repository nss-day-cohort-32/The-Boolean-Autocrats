import React, { Component } from 'react';

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
        const task = {
            name: this.state.name,
            info: this.state.info
        };

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
                </form>
            </>
        );
    }
}

export default TaskForm;
