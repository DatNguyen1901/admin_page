import React, { Component } from "react";
import './App.css';
import Blog from './Page/Blog';
import { Switch, Route } from "react-router-dom";
import Register from './Page/Register';
import Login from './Page/Login'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Blog />
        </Route>
      </Switch>
    );
  }
}

export default App;
