import React, { Component } from 'react';
import styled from 'styled-components';
import SearchForm from "./searchForm"
import { BsFillBootstrapFill, BsJustify } from "react-icons/bs";
import NavLinks from './navLinks'
import NavLinksPhone from './navLinksPhone'


 
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav = () => {
    let phoneNav = document.querySelector(".lower-nav-container");
    console.log(phoneNav.classList.toggle("disappear"))
  }


  render() { 
    return (  
      <Navbar>
        <div className="overall-nav-wrapper">
          <div className="upper-nav-container">
            <div className="nav-logo-container">
              <BsFillBootstrapFill/>
            </div>
            <div className="nav-search-container">
              <SearchForm/>
            </div>
            <div className="nav-links-container">
              <NavLinks/>
            </div>
            <div className="nav-toggle-container" onClick={this.toggleNav}>
              <BsJustify/>
            </div>
          </div>

          <div className="lower-nav-container disappear">
            <NavLinksPhone/>
          </div>
        </div>
      </Navbar>
    );
  }
}

const Navbar = styled.nav`
  .upper-nav-container{
    background: #100e17;
    margin: 0px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid #ff8a01;
  }

  .lower-nav-container{
    background: #100e17c7;
    margin: -16px;
  }

  .disappear{
    display: none;
  }

  .appear{
    display: block;
  }

  .nav-search-container{
    background: green;
  }

  .nav-logo-container{
    background: #ff8a01;
    font-size: 4em;
  }

  .nav-toggle-container{
    color: #ff8a01;
    font-size: 3em;
    display: none;
  }

  @media only screen and (max-width: 900px) {
    .nav-search-container {
      display: none; 
    }

    .nav-toggle-container{
      display: block;
    }

    .nav-links-container{
      display: none;
    }
  }
  
`;
 
export default NavigationBar;
