import React, { Component } from "react"
export default class Register extends Component {

    state = {
        userName: "",
        email: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange= {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    }

    getAllUsers = evt => {
        evt.preventDefault();
       this.props.getAll()
       .then(allUsers => {
           let usersArray = allUsers.filter(user => {
               return (user.userName === this.state.userName)
           })
           if (usersArray.length > 0) {
               alert("username is not avaliable")
           }
          else {
              alert("Registered!")
                const newUser = {
                    userName: this.state.userName,
                    password: this.state.password
                }
                this.props.addUser(newUser)
                this.props.history.push("/")
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                <div className="">
                    <h2>REGISTER</h2>
                    <p>Register a new account</p>
                </div>
                </div>
                <div className="">
                <div className="">
                <div className="">
                <form>
                    <div className="">
                        <label htmlFor=""> UserName: </label>
                        <input type="text" required onChange={this.handleFieldChange} id="userName" placeholder="Enter username Here" />
                    </div>
                    <div className="">
                        <label htmlFor="Password">Password:</label>
                        <input type="text" required onChange={this.handleFieldChange} id="password"
                        placeholder="Enter password"/>
                    </div>
                    <button type="submit" className="" onClick={this.getAllUsers}> Register </button>
                </form>
            </div>
            </div>
            </div>
            </React.Fragment>
        )
}
    }