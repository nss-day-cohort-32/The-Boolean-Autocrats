import React, { Component } from 'react';
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

class NutShell extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default NutShell;

