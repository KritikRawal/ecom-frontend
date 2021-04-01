import { Component, state, DeleteProduct } from "react";
import { Carousel,Container, Row, Col, CardDeck, Card,Image } from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import { Link, Route } from 'react-router-dom'
import axios from 'axios';

import React from "react";


let dataBox = [
  {
    "image": "https://images-na.ssl-images-amazon.com/images/I/71RPkRAn1yL._AC_SL1500_.jpg"
    , "title": "-Chair"
  },
  {
    "image": "http://cdn.home-designing.com/wp-content/uploads/2018/05/White-Modern-Coffee-Table-with-Book-Storage-Shelves-600x600.jpg"
    , "title": "-Table"
  },
  {
    "image": "https://s3.amazonaws.com/furniture.retailcatalog.us/products/2176891/large/queen-bed-3960-1.jpg"
    , "title": "-Beds"
  },
  {
    "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
    , "title": "-Sofa"
  }



]

class Body extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    axios.get("http://localhost:90/product/showall")
      .then((response) => {
        console.log(response)
        this.setState({
          products: response.data
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  DeleteProduct = (prod_id) => {
    console.log(prod_id);
    axios.get('http://localhost:90/product/delete/' + prod_id)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }


  render() {
    return (
      <>
        <Container >
          <Carousel >
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images2.alphacoders.com/270/thumb-1920-270990.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container>
          <Row className="mt-2 mb-2">
            <Col lg={4}>
              <div className="furniture__info">
                <h5 className="text-center"> Delivery and Installation </h5>
                <p className="text-center">  Safe and Sanitized </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="furniture__info">
                <h5 className="text-center"> Bulk Buy Negotiable </h5>
                <p className="text-center">  Special Prize buying in bulk </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="furniture__info">
                <h5 className="text-center"> Expert Advice </h5>
                <p className="text-center">  Free Interior Design Consultant </p>
              </div>
            </Col>
          </Row>

          <div>
            <p class="hover"> Explore More products</p>

          </div>
          <Row>








          </Row>
        </Container>

        <Container fluid>
          <Row>
            {
              dataBox.map((val) => {
                return (
                  <Col lg={3}>

                    <div className="image__detail">
                      <img src={val.image} alt="image" className="d-block" />

                    </div>
                    <p>{val.title}</p>
                  </Col>
                )
              })
            }
          </Row>
        </Container>

        <Container className="mt-4 bg-white">
          <Row>
          
        <Col md={4} >
<p className="pt-5 topicspace h5 " >The Modular Office</p>
<p className="mt-3">Show-off your new modern and modular office to your visitors!

</p>
<p>The modular workstation from GeeKen combines maximal comfort, high quality and excellent ergonomics and functional
   properties.This stylish and modern workstation is a real good office partner in any office environment.</p>
   <Link to='/' className="btn btn-outline-dark mt-5 w-40">SHOP NOW</Link>
        </Col>
        <Col md={8} className="image__detailtest">

<Image src="https://funfurnish.com/wp-content/uploads/2019/05/modular-furniture-promo-1.jpg" className="w-100 h-100"/>

        </Col>
          </Row>

        </Container>
        <Container fluid className="moreabout mb-2 px-0">
          <Row>
            <Col md={2} className="moreabout text-white">

            </Col>
            <Col md={4} className="moreabout text-white">
<p className="pt-5">more about</p>
<p className="h4 pb-2">The Company</p>
<p className="mt-2">FunFurnish.com is an online content driven marketplace for home and office products. With assortments of products of international as well as local brands, Funfurnish.com offers new, exciting, convenient and a quality assuring way to shop for furniture, décor products and home appliances in Nepal.</p>
<p className="mt-2">The company delivers across Nepal and is dedicated to provide prompt customer service and facilities like free assembly and delivery. Be it decorating your new office or renovating or replacing your old furniture with brand new ones, we at Funfurnish strive to put the Fun in Furnishing.</p>
<Link to='/' className="btn btn-outline-light mt-3 mb-2  w-40 px-5 py-2">Learn More</Link>
            </Col>
            <Col md={6}>
              <img src="https://funfurnish.com/wp-content/uploads/2018/09/aboutcompany.jpg" className="w-100 h-100" width="100%" fluid/>
            </Col>
          </Row>
        </Container>


        {/* <Container>
                <Row>
                    <Col>
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/addproduct' component={AddProduct} />

             

                    </Col>
                    <div>{
                        this.state.products.map((product)=>{
                            return (<div>
                                <p>Id :
                                {
                                product.pname 
                                }
                                </p>
                                <p><button onClick={this.DeleteProduct.bind(this, product._id)}>delete</button></p>
                            </div>
                                ) 
                        })
                    }
                    </div>
                    <Col>somethint</Col>
                </Row>
             </Container> */}
      </>
    )
  }
}
export default Body;
