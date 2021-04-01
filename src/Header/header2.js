import React from 'react';
import {Nav,Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavbarLayout = (props)=>{
    return (
    <React.Fragment>
                <Navbar  expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

  <Nav className="ml-5 mr-auto" style={{position:"relative",left:"8%"}}>
      <Link className="nav-link" activeClassName="active_class" exact to="/"> Home </Link>
      <Link className="nav-link" activeClassName="active_class" to="/AboutUs"> About </Link>
      {/* <Link className="nav-link" activeClassName="active_class" to="/Product"> Product </Link> */}
      <NavDropdown title="Product" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      <Link className="nav-link" activeClassName="active_class" to="#"> Cart</Link>
      <Link className="nav-link" activeClassName="active_class" to="/register"> Register</Link>
      
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
    )
}

export default NavbarLayout;