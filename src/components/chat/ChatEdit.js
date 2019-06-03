import React, { Component } from "react";
import ChatManager from "../../modules/ChatManager";

export default class ChatEdit extends Component {
  state = {
    message: ""
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  editMessage = (evt) => {
    evt.preventDefault();
    {
      const editedMessage = {
        id: this.props.match.params.chatId,
        message: this.state.message
      };

      this.props
        .putMessages(editedMessage)
        .then(() => this.props.history.push("/chat"));
    }
  };

  componentDidMount() {
    ChatManager.getMessage(this.props.match.params.chatId).then((chat) => {
      this.setState({
        message: chat.message
      });
    });
  }

  render() {
    return (
      <React.Fragment>
       <center> <form className="ChatEdit">
          <div className="">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              className=""
              onChange={this.handleFieldChange}
              id="message"
              value={this.state.message}
            />
          </div>
          <button type="submit" onClick={this.editMessage} className="">
            Save Edit
          </button>
        </form></center>
      </React.Fragment>
    );
  }
}
