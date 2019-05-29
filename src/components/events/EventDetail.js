import React, { Component } from "react"


export default class Event extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        console.log("props", this.props)
        return (
            <section className="event">
                <div key={ this.props.event.id } className="card">
                    <div className="card-body">
                        <h2 className="card-title">
                            { this.props.event.name }
                        </h2>
                        <h3 className="card-title">{ this.props.event.date }</h3>
                        <h3 className="card-title">{ this.props.event.location }</h3>

                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteEvent(this.props.event.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}