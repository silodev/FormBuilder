import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import FormBuilder from "./containers/FormBuilder/FormBuilder";

import "./App.css";
import Form from "./containers/Form/Form";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  
  render() {
    return (
      <div className="App" >
       {/*  <Router history={history}>
        
            <Route exact path="/" Component={FormBuilder} />
            <Route path="/form" Component={Form} />
 
       
        </Router> */}
        <FormBuilder />
        <Form />
      </div>
    );
  }
}

export default App;
