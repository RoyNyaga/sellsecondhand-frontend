import React, { Component } from 'react';
import styled from 'styled-components';
import SearchForm from "./searchForm"
 
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Navbar>
        <div class="upper-nav-container">
					<div class="nav-logo-container">
            <h2>All-In-One</h2>
          </div>
          <div class="nav-search-container">
            <SearchForm/>
          </div>
          <div class="nav-links-container">
            <ul class="testing">
              <li><a class="nav-links" href="#">Home</a></li>
              <li><a class="nav-links scrolling-link" href="#services-link">services</a></li>
              <li><a class="nav-links scrolling-link" href="#about-link">About</a></li>
              <li><a class="nav-links scrolling-link" href="#reviews">Events</a></li>
              <li><a class="nav-links scrolling-link" href="#contact-link">Contact</a></li>
              <li><a class="nav-links scrolling-link" href="#contact-link">book online</a></li>
            </ul>
          </div>
          <div class="nav-toggle-container">Toggle</div>
        </div>
      </Navbar>
    );
  }
}

const Navbar = styled.nav`
  .upper-nav-container{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }

  
`;
 
export default NavigationBar;
