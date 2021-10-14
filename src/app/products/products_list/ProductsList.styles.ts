import styled from "styled-components/macro";

export const ProductsListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  padding-bottom: 22px;

  @media (max-width: 575px) {
    padding-bottom: 14px;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 24px;

  img {
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const NoProductsWrapper = styled.div`
  width: 100%;
  max-width: 648px;
  margin: auto;
  padding: 0 24px 56px;
`;

export const NoProductsBody = styled.div`
  background-color: #fff;
  min-height: 344px;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 18px;
    line-height: 16px;
    margin: 22px 0 8px;
  }

  p {
    font-size: 14px;
    line-height: 16px;
    color: #9194a5;
    margin: 0;
  }
`;

export const Column = styled.div`
  width: 100%;
  max-width: 25%;
  padding: 0 12px;
  margin-bottom: 32px;

  @media (max-width: 991px) {
    max-width: 50%;
  }

  @media (max-width: 575px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 170px;
  margin-bottom: 16px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
  position: relative;
  border-radius: 8px;
  min-height: 400px;

  h2 {
    font-size: 18px;
    line-height: 16px;
    margin: 0 16px 9px;
  }

  p {
    font-size: 14px;
    line-height: 16px;
    color: #9194a5;
    margin: 0 16px 45px;
  }

  button {
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    border: none;
    width: 100%;
    background-color: #4460f7;
    padding: 11px;
    border-radius: 4px;
    margin-bottom: 24px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2140e8;
    }

    &[disabled] {
      background-color: #9194a5;
      pointer-events: none;
    }
  }
`;

export const PromoBox = styled.span`
  background-color: #f9a52b;
  padding: 4px 17px 4px 16px;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  top: 16px;
`;

export const BoxBottomPart = styled.div`
  margin: auto 16px 0;

  div {
    margin-bottom: 12px;

    img {
      margin: 0 5px;

      &:first-child {
        margin-left: 1px;
      }
    }
  }
`;
