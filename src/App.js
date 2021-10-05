import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react';
import Main from './components/Main'
import Login from './components/Login';
// import Favorites from './components/Favorites'
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <>
                <Navigation/>
                <Main />
                {/* <Favorites /> */}
                </>
              ) : (
                <Login />
              )}
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
