import styled from "styled-components";

export const ProductDetailContainer = styled.section`
  background-color: #fff;
`;

export const ProductDetailHeader = styled.header`
  padding: 1rem 0;
  background-color: #adadad;
  box-shadow: 0 0 5px black;
`;

export const ProductDetailTitle = styled.h1`
  max-width: 1200px;
  margin: 0 auto;
  color: #222;
  font-size: 1.8rem;
  text-align: center;
`;

export const ProductDetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 2rem 4rem;
`;

export const ProductDetailCard = styled.article``;

export const ProductDetailImage = styled.img`
  display: block;
  margin: auto;
  height: 450px;
  object-fit: contain;
`;

export const ProductDetailPrice = styled.strong`
  font-size: 1.5rem;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

export const OptionDiv = styled.div`
  margin: 10px 0;
`;

export const OptionLabel = styled.label`
  font-size: 1.2rem;
`;

export const OptionList = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  list-style: none;
  gap: 10px;
`;

interface OptionListItemColorProps {
  $bgColor?: string;
}
export const OptionListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 48px;
  width: 48px;
  border: 1px solid gray;

  &:hover {
    border: 2px solid gray;
  }
`;

export const OptionListItemColor = styled.span<OptionListItemColorProps>`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  background-color: ${(props) =>
    props.$bgColor !== undefined ? props.$bgColor : "white"};
`;

export const ProductDetailAddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 2rem;
  gap: 20px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  border: 1px solid lightgray;
  align-items: center;
  justify-content: center;
`;

export const AmountText = styled.h3`
  width: 40px;
  text-align: center;
  overflow: hidden;
`;

export const AmountButton = styled.button`
  border: none;
  font-size: 1.2rem;
  width: 25px;
  height: 35px;
  background-color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: gray;
  }
`;

export const AddToCartButton = styled.button`
  border: none;
  background-color: #ff6642;
  color: #222;
  font-weight: bold;
  width: 180px;
  height: 35px;

  &:hover {
    filter: brightness(1.2);
  }
`;
