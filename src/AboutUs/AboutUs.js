import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import image from "./furniture.jpg";
import my_image from "./my_photo.png"
import Aastha from "./Aastha.png"
import Kritik from "./Kritikr.png"
import ash from "./ash.png"
import pushpa from "./pushpa.png"
import Contact from "./contact"
import Value from "./value"


class AboutUs extends Component {
  render() {
    return (
      <main>
        <Container>
          <div className="start">
            <div className="picture">
              <img src={image} alt="imgae" className="size" />
            </div>
            <div className="content">
              <h1 className="heading">About Us</h1>
              <p className="aboutus-content">
                FunFurnish.com is an online content driven marketplace for home
                and office products. With assortments of products of
                international as well as local brands, Funfurnish.com offers
                new, exciting, convenient and a quality assuring way to shop for
                furniture, décor products and home appliances in NepalThe
                company delivers across Nepal and is dedicated to provide prompt
                customer service and facilities like free assembly and delivery.
                Be it decorating your new office or renovating or replacing your
                old furniture with brand new ones, we at Funfurnish strive to
                put the Fun in Furnishing.
              </p>


              <button className="btn-btn">Learn More</button>
            </div>
            <div className="backside"></div>
            
          </div>

          <div className="about-us ">
          <div className="containers">
            <h1 className="headings">Our Teams</h1>  
              <div className="profiles">
                <div className="profile">
                <img src={my_image} alt="imgae" className="imageee" />
                <h3 className="user_name">Suman Niroula</h3>
                <h5 className="role">Developer</h5>
                </div>
                
                <div className="profile">
                <img src={Kritik} alt="imgae" className="imageee" />
                <h3 className="user_name">Kritik Rawal</h3>
                <h5 className="role">Scrum Master</h5>
                </div>

                <div className="profile">
                <img src={pushpa} alt="imgae" className="imageee" />
                <h3 className="user_name">Pushpa Raj Joshi</h3>
                <h5 className="role">Developer</h5>
                </div>

                
                <div className="profile">
                <img src={ash} alt="imgae" className="imageee" />
                <h3 className="user_name">Ashwarya Shah</h3>
                <h5 className="role">Developer</h5>
                </div>

                <div className="profile">
                <img src={Aastha} alt="imgae" className="imageee" />
                <h3 className="user_name">Astha Upadhyaya</h3>
                <h5 className="role">Developer</h5>
                </div>

                <div className="profile">
                <img src={my_image} alt="imgae" className="imageee" />
                <h3 className="user_name">Sumeet Nakarmi</h3>
                <h5 className="role">Developer</h5>
                </div>
                </div>
              </div>
          </div>
          
          <Value />
          <Contact />

         



        </Container>
      </main>
    );
  }
}

export default AboutUs;
