import styled from "styled-components/macro";

export const LoginPageWrapper = styled.div`
  display: flex;

  img {
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 128px;
  max-width: 752px;

  h1 {
    font-size: 24px;
    line-height: 40px;
    margin: 52px 0 235px;

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (max-width: 991px) {
      margin: 40px 0 103px;
    }
  }

  h2 {
    margin: 0 0 29px;
    font-size: 30px;
    line-height: 40px;
  }

  button {
    background: #4460f7;
    border-radius: 4px;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    width: 100%;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 34px 0 14px;

    &:hover {
      background-color: #2140e8;
    }
  }

  @media (max-width: 1199px) {
    padding: 0 80px;
  }

  @media (max-width: 1070px) {
    padding: 0 40px;
  }

  @media (max-width: 991px) {
    padding: 0 24px;
    max-width: 544px;
    margin: 0 auto;
  }
`;

export const FormItem = styled.div`
  display: flex;
  width: 100%;

  label {
    font-size: 14px;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin: 8px 0 22px;
      font-size: 14px;
      line-height: 16px;
      border: 1px solid #e0e2ea;
      border-radius: 8px;
      padding: 15px;

      &::placeholder {
        color: #9194a5;
      }
    }
  }
`;

export const ForgotWrapper = styled.div`
  a {
    font-size: 14px;
    line-height: 16px;
    text-decoration: underline;
    color: #9194a5;
  }
`;
