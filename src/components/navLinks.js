import React, { Component } from 'react';
import styled from "styled-components"

const NavLinks = () => {
  return (
    <Wrapper>
      <li><a className="nav-links" href="#">Home</a></li>
      <li><a className="nav-links scrolling-link" href="#services-link">services</a></li>
      <li><a className="nav-links scrolling-link" href="#about-link">About</a></li>
      <li><a className="nav-links scrolling-link" href="#reviews">Events</a></li>
      <li><a className="nav-links scrolling-link" href="#contact-link">Contact</a></li>
      <li><a className="nav-links scrolling-link" href="#contact-link">book online</a></li>
    </Wrapper>
  );
}
 
const Wrapper = styled.ul`
  list-style: none;

  li{
    display: inline-block;
    a{
      color: #f7e8dc;
      padding: 5px;
      text-decoration: none;
      font-weight: 700;
    }
  }
  
`


export default NavLinks;