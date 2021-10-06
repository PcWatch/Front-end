import React from "react";
import "./Nav.css";
import Logout from "./Logout";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../nav.css";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navStuff">
          <Container>
            <Navbar.Brand>TITLE HERE (WIP)</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/" to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/Favorites"
                to="/Favorites"
                onClick={() => this.forceUpdate()}
              >
                Favorites
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/Shopping"
                to="/Shopping"
                onClick={() => this.forceUpdate()}
              >
                Shopping List
              </Nav.Link>
              <Form className="searchForm">
                <FormControl
                  onChange={this.searchEvent}
                  type="text"
                  placeholder="What food would you like to search?"
                  className="primarySearch"
                />
                <Button
                  onClick={this.props.getRecipes}
                  className="searchButton"
                  variant="success"
                >
                  Search Now!
                </Button>
              </Form>
            </Nav>
            <Logout />
          </Container>
        </Navbar>
      </>
    );
  }
}
export default withAuth0(Navigation);
