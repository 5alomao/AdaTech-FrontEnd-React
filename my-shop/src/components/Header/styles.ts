import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #222;
`;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  $isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => (props.$isLogged ? "red" : "green")};
  color: white;

  svg {
    font-size: 0.7rem;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: #4aa4aa;
  color: #fff;

  svg {
    font-size: 0.7rem;
  }
`;
