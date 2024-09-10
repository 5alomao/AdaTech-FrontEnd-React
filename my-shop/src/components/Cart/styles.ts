import styled from "styled-components";

interface ContainerProps {
  $showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  height: 100vw;
  width: 450px;
  top: 0;
  z-index: 3;
  right: ${(props) => (props.$showCart ? "0px" : "-450px")};
  background-color: white;
  padding: 1.5rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 1s;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const CloseCart = styled.span`
  cursor: pointer;
  svg {
    display: block;
    margin: auto;
    border-radius: 5px;
    font-size: 2rem;
    color: crimson;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const CartProductsList = styled.ul`
  display: flex;
  max-height: 450px;
  flex-direction: column;
  list-style: none;
  gap: 5px;
  padding: 5px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
    background-color: #f6f6f6;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  @media (max-width: 576px) {
    max-height: 350px;
  }
`;

export const CartProductItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
`;

export const CartProductItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const CartProductItemTitle = styled.p`
  width: 60%;
  margin: 0 10px;
  text-align: left;
  font-size: 0.8rem;
`;

export const CartProductItemPrice = styled.strong`
  width: 20%;
  text-align: left;
  font-size: 0.8rem;
`;

export const CartProductItemTrash = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  svg {
    font-size: 1.2rem;
    transition: color 0.2s;
    &:hover {
      color: red;
    }
  }
  cursor: pointer;
`;

export const CartSummaryWrapper = styled.div`
  padding: 0 5px;
  margin-top: 1.5rem;
`;

export const CartSubTotalPrice = styled.strong`
  margin-top: 1.5rem;
  text-align: left;
  border-bottom: 1px solid gray;
`;

export const CartIsEmptyMessage = styled.p`
  text-align: center;
`;

interface CartOverlayProps {
  $showCart: boolean
}

export const CartOverlay = styled.div<CartOverlayProps>`
  display: ${(props) => (props.$showCart ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
`
