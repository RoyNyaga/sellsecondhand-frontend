import React, { Component } from 'react';
import styled from "styled-components"

const ProductCard = () => {
  return (  
    <Wrapper>
      <div className="card-image-div">
        <img src="https://res.cloudinary.com/it-s-tech/image/upload/v1586988017/WhatsApp_Image_2020-04-15_at_10.55.28_PM_koab5q.jpg"/>
      </div>
      <div className="card-body">
        <h1 className="general-color reduced-h1">This is the title of the product</h1>
      </div>
      <div className="card-footer">
        <div className="price-sectioin">
          <h4 className="general-color">5000FRS</h4>
        </div>
        <div className="review-discount-sectioin">
          <i class="fas fa-star checked-star"></i>
          <i class="fas fa-star checked-star"></i>
          <i class="fas fa-star checked-star"></i>
          <i class="fas fa-star checked-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  color: #f6e7db;
  background: #100e17d9;
  img{
    width: 100%;
    border-radius: 20px;
  }
  .checked-star{
    color: orange;
  }
  h1{
    margin-top: 5px;
    padding: 0 10px;
    text-align: center;
    line-height: 20px;
  }
  .card-footer{
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
  }
`
 
export default ProductCard;