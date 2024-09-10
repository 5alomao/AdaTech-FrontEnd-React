import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  width: 100%;
  font-size: 1.2rem;
  text-align: left;
  margin-top: 1rem;
  min-height: 57px;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  align-items: center;
  svg:last-child {
    margin-right: 5px;
  }
`;

export const Price = styled.strong``;

export const ButtonCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1rem;
  margin-top: 1rem;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  font-size: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  background-color: #314ad6;
  color: #fff;
  svg {
    font-size: 0.7rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  font-size: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  background-color: crimson;
  color: #fff;
  svg {
    font-size: 0.7rem;
  }
`;
