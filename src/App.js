import React from "react";
import {
BrowserRouter as Router,
Switch,
Route,
  Link
} from "react-router-dom";

import Home from "./components/pages/Home";
import Login from './components/pages/Login'
import Register from './components/pages/Register'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> 
        </Switch>
    </Router>
    </>
  );
};

export default App;
