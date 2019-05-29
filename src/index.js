// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import NutShell from './components/NutShell'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'



ReactDOM.render(
    <Router>
        <NutShell />
    </Router>
    , document.getElementById('root'))


