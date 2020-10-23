import React, { Component } from 'react';
import styled from "styled-components"
import SearchForm from "./searchForm"

const NavLinksPhone = () => {
  return (  
    <Wrapper>
      <li><a className="nav-links" href="#">Home</a></li>
      <li><a className="nav-links scrolling-link" href="#services-link">services</a></li>
      <li><a className="nav-links scrolling-link" href="#about-link">About</a></li>
      <li><a className="nav-links scrolling-link" href="#reviews">Events</a></li>
      <li><a className="nav-links scrolling-link" href="#contact-link">Contact</a></li>
      <li><a className="nav-links scrolling-link" href="#contact-link">book online</a></li>
      <li><SearchForm/></li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  list-style: none;
  padding: 10px 30px;
  text-align: center;
  li{
    padding: 5px;
    a{
      color: #f7e8dc;
      padding: 5px;
      text-decoration: none;
      font-weight: 700;
    }
  }
`
 
export default NavLinksPhone;