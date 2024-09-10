import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  gap: 2rem;
  flex-wrap: wrap;

  & > article {
    flex: 1 300px;
  }
`;

// export const Container = styled.main`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 2rem;
//   max-width: 1200px;
//   margin: 4rem auto;
//   padding: 0 2rem;
// `;
