import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

class AboutUs  extends Component {
    render(){
  return (
    <main>
      
      <Wrapper className="page section section-center">
        <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349" alt="about img" />
        <article>
          <div className="title">
            <h2>about us</h2>
            <div className="underline"></div>
          </div>
          <p>
            Furniture World will leverage the core strengths of the group in
            understanding diverse consumer & trade behaviour, retail
            distribution network, brand equity, global sourcing & cost effective
            supply chain management, which are critical success factors in this
            sector. The core vision of Furniture World is "to be the first
            choice partner of customers aspiring for Value for Style home
            interior solutions". A chain of large retail format stores under the
            brand name "Furniture World- Home With Soul" is operating across the
            country. Furniture World Stores showcase over 20000+ world-class
            contemporary products in Home Furniture, Soft Furnishings, Home
            Decor & Accessories & Wall Fashion.
          </p>
        </article>
      </Wrapper>
    </main>
  );
    }
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    text-transform: normal;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutUs;
