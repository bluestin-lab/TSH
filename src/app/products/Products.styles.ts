import styled from "styled-components/macro";

export const ProductsPage = styled.div`
  background-color: #f8f8fa;
  min-height: 100vh;
`;

export const HeaderBackground = styled.div`
  background-color: #fff;
  padding: 48px 0;

  @media (max-width: 991px) {
    padding: 49px 0 35px;
  }
`;

export const ProductsBackground = styled.div`
  padding: 56px 0 0;

  @media (max-width: 575px) {
    padding: 24px 0 0;
  }
`;

export const Container = styled.div`
  max-width: 1270px;
  margin: auto;
  padding: 0 24px;
`;
