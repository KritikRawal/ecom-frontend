import React from 'react';
import {Nav,Navbar, NavDropdown} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom'

const NavbarLayout = (props)=>{
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
    return (
    <React.Fragment>
                <Navbar  expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

  <Nav className="ml-5 mr-auto" style={{position:"relative",left:"8%"}}>
      <NavLink className="nav-link" activeClassName="active_class" exact to="/"> Home </NavLink>
      <NavLink className="nav-link" activeClassName="active_class" to="/AboutUs"> About </NavLink>
      {/* <Link className="nav-link" activeClassName="active_class" to="/Product"> Product </Link> */}
      
      {
        token?
        (
          user.userType == "Admin"?
          (
            <NavLink className="nav-link" activeClassName="active_class" to="/admins"> Admin </NavLink>
          ):
          (
            <></>
          )
        ):
        (
          <></>
        )
      }
      
      <NavLink className="nav-link" activeClassName="active_class" to="#"> Cart</NavLink>
      <NavLink className="nav-link" activeClassName="active_class" to="/register"> Register</NavLink>
      
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
    )
}

export default NavbarLayout;