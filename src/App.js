import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Switch>
            <Route path="/" exact />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" />
            <Route path="/dashboard" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
