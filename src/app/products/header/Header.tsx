import React from "react";

import { useWindowWidth } from "@react-hook/window-size";

import Search from "./search/Search";
import CheckboxFilter from "./checkbox_filter/CheckboxFilter";
import LoginPanel from "./login_panel/LoginPanel";

import { Container } from "../Products.styles";
import {
  HeaderElementsWrapper,
  FiltersWrapper,
  TopHeaderPart,
  Checkboxes,
} from "./Header.styles";

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 992;

  return (
    <Container id="header">
      <HeaderElementsWrapper>
        <TopHeaderPart>
          <h1>join.tsh.io</h1>
          {isMobile && <LoginPanel />}
        </TopHeaderPart>
        <FiltersWrapper>
          <Search />
          <Checkboxes>
            <CheckboxFilter label={"Active"} filterName={"active"} />
            <CheckboxFilter label={"Promo"} filterName={"promo"} />
          </Checkboxes>
        </FiltersWrapper>
        {!isMobile && <LoginPanel />}
      </HeaderElementsWrapper>
    </Container>
  );
};

export default Header;
