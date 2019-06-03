import React, { Component } from 'react';
import { Button, Card } from "reactstrap"


class TaskForm extends Component {

   state = {
       name: "",
       info: "",
       date: new Date()
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
           info: this.state.info,
           date: this.state.date
       };
       this.props.addTask(tasks).then(() => this.props.history.push("/tasks"));
   }

   render() {
       return (
           <>
               <Card>
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
               </Card>
           </>
       );
   }
}

export default TaskForm