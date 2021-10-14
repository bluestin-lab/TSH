import styled from "styled-components/macro";
import searchIcon from "./assets/search.svg";
import checkMarkIcon from "./assets/check-mark.svg";

export const HeaderElementsWrapper = styled.div`
  display: flex;

  h1 {
    font-size: 24px;
    line-height: 40px;
    margin: 4px 105px 0 0;
    display: flex;
    align-items: center;

    @media (max-width: 991px) {
      margin-right: 10px;
    }
  }

  input[type="text"] {
    border: 1px solid #e0e2ea;
    border-radius: 8px;
    padding: 15px 48px 13px 13px;
    width: 392px;
    margin-right: 24px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 19px) 14px;

    &::placeholder {
      font-size: 14px;
      line-height: 16px;
      color: #1a1b1d;
    }

    @media (max-width: 991px) {
      margin-bottom: 27px;
      margin-right: 0;
      width: 100%;
      max-width: 392px;
    }
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    margin: 0;
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const TopHeaderPart = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    margin-bottom: 29px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Checkboxes = styled.div`
  display: flex;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckboxLabel = styled.label`
  padding-left: 32px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  margin-right: 32px;

  span {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #e0e2ea;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: -5px;

    &:before {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      background-image: url(${checkMarkIcon});
      background-repeat: no-repeat;
      background-position: 5px 6px;
    }
  }

  input:checked ~ span {
    background-color: #4460f7;
    border-color: #4460f7;
  }
`;

export const LoginPanelWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.div`
  a {
    padding: 9px 26px 8px 24px;
    font-size: 14px;
    line-height: 16px;
    color: #4460f7;
    background-color: #fff;
    border: 1px solid #4460f7;
    border-radius: 4px;
    cursor: pointer;
    transition: color 0.3s, border-color 0.3s;
    text-decoration: none;

    &:hover {
      color: #2140e8;
      border-color: #2140e8;
    }
  }
`;
