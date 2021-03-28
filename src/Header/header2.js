import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavbarLayout = (props)=>{
    return (
    <React.Fragment>
                <Navbar  expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

  <Nav className="ml-5 mr-auto" style={{position:"relative",left:"8%"}}>
      <Link className="nav-link" activeClassName="active_class" exact to="/"> Home </Link>
      <Link className="nav-link" activeClassName="active_class" to="/register"> Product </Link>
      <Link className="nav-link" activeClassName="active_class" to="/register"> Account </Link>
      <Link className="nav-link" activeClassName="active_class" to="/register"> Contact Us </Link>
      <Link className="nav-link" activeClassName="active_class" to='/addproduct'>AddProduct</Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
    )
}

export default NavbarLayout;