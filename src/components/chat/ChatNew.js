import React, { Component } from "react";

export default class ChatNew extends Component {
  state = {
    message: ""
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  BuildNewMessage = (evt) => {
    evt.preventDefault();
    {
      const chat = {
        message: this.state.message
      };

      this.props.addMessage(chat);
    }
  };

  render() {
    return (
      <React.Fragment>
        <center>
          <form className="">
            <div className="" />
            <div className="ChatNew">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                required
                className=""
                onChange={this.handleFieldChange}
                id="message"
                placeholder=""
              />
              <button type="submit" onClick={this.BuildNewMessage} className="">
                Send
              </button>
            </div>
          </form>
        </center>
      </React.Fragment>
    );
  }
}
