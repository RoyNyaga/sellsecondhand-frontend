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

`
 
export default SearchForm;