import React, { Component } from 'react';
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  return (  
    <Wrapper>
      <input type="text" placeholder="what do you have in mind" name="search"/>
      <button type="submit"><BsSearch/></button>
    </Wrapper>
  );
}



const Wrapper = styled.form` 
  input{
    width: 300px;
    height: 20px;
    border: 2px solid #fc8019;
    border-right: none;
    padding: 10px;
    border-radius: 50px 0 0 50px;
    background: #2d273a;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
  }

  @media only screen and (max-width: 768px) {
    input {
      width: 200px;
    }
  }

  button{
    width: 50px;
    height: 44px;
    padding: 5px;
    border: 2px solid #fc8019;
    border-left: none;
    background: #fc8019;
    color: white;
  }
`
 
export default SearchForm;