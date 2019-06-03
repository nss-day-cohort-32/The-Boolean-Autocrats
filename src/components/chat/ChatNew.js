import React, { Component } from "react"


export default class ChatNew extends Component {

    state = {
        message: "",
      };
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
    
      BuildNewMessage = evt => {
        evt.preventDefault();
        {
          const chat = {
            message: this.state.message,
          };
    
          this.props
            .addMessage(chat)
        }
      };


    render() {
        return (
            <React.Fragment>
            
            <form className="">
                <div className="">
        
          </div>
          <div className="">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              className=""
              onChange={this.handleFieldChange}
              id="message"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            onClick={this.BuildNewMessage}
            className="">
            Send
          </button>
          </form>
          
        </React.Fragment>
        )
    }
}