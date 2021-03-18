import React from 'react';
import {Container,Col,Row,Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';



const Header1 = (props)=>
{
    return (
        <React.Fragment>
            <Container fluid className="bg-white">
                <Row>
                    <Col>
            <Container>
                <Row>
                    <Col style={{background:"white",padding:"15px"}}>
                        <div className="myDiv" style={{height:"100%"}}>
                        <Row>
                            <Col lg={5} xs={12}>
                            <div className="img__logo">
                                <img src = "asis.PNG" alt="logo" className="d-block"/>
                            </div>
                        </Col>

                        <Col lg={4} className="d-none d-md-block">
                            <div className="mySearch">
                                <input type="text" className="search" name="search" placeholder="Search.."/>
                            </div>
                        </Col>

                        <Col lg={3} className="d-none d-md-block" style={{marginTop:"20px"}}>
      




    <Nav className="ml-5">
    <Link className="nav-link" style={{color:"black",fontWeight:"bold",fontSize:"16px"}}  to="/"> <FaShoppingCart/> </Link>
      <Link className="nav-link" style={{color:"black",fontWeight:"bold",fontSize:"16px",marginTop:"2px"}} to="/"> LOGIN </Link>
     
     
    </Nav>
    

                        </Col>
            
                        </Row>
                        </div>
                        
                       
                    </Col>
                </Row>
            </Container>
            </Col>
            </Row>
            </Container>
        </React.Fragment>
    )
}

export default Header1;