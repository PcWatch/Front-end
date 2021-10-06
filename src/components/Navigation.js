import React from "react";
import './Nav.css';
import Logout from './Logout'
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import '../nav.css';


class Navigation extends React.Component {
  render() {
    return (
      <>

        <Navbar bg="dark" variant="dark" className="navStuff">
          <Container>
            <Navbar.Brand>TITLE HERE (WIP)</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} href="/" to="/" >Home</Nav.Link>
                <Nav.Link as={Link} href="/Favorites" to="/Favorites" onClick={() => this.forceUpdate()}>Favorites</Nav.Link>
                <Nav.Link as={Link} href="/Shopping" to="/Shopping" onClick={() => this.forceUpdate()}>Shopping List</Nav.Link>
                <Form inline>
                  <FormControl type="text" placeholder="Search Here" className="mr-sm-2" />
                  <Button variant="success">🔍</Button>
                  <Logout/>
                </Form>
              </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default withAuth0(Navigation);
