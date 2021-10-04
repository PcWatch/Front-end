import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react';


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <>
                <Main/>
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
