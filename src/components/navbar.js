import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>            
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
 
export default NavigationBar;
