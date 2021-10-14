import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

import { LoginPanelWrapper, LoginButton } from "../Header.styles";

const LoginPanel: React.FC = () => {
  return (
    <LoginPanelWrapper>
      <LoginButton>
        <Link to={AppRoute.login}> Login </Link>
      </LoginButton>
    </LoginPanelWrapper>
  );
};

export default LoginPanel;
