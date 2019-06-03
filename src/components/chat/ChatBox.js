import React, { Component } from "react";

export default class ChatBox extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="">
          {this.props.chat.map((chat) => (
            <div key={chat.id} className="">
              <hr />
              {chat.message}
              <hr />
              <button
                type=""
                className=""
                onClick={() => {
                  this.props.history.push(`/chat/${chat.id}/edit`);
                }}
              >
                Edit
              </button>
              <button
                className=""
                onClick={() => this.props.deleteMessages(chat.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}
