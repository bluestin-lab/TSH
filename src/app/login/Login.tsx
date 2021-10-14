import React from "react";

import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";

import {
  LoginPageWrapper,
  LoginFormWrapper,
  FormItem,
  ForgotWrapper,
} from "./Login.styles";

import loginBg from "./assets/login-bg.jpg";

export const Login = () => {
  return (
    <LoginPageWrapper>
      <img src={loginBg} alt="Man on the bridge" />
      <LoginFormWrapper>
        <h1>
          <Link to={AppRoute.home}>join.tsh.io</Link>
        </h1>
        <h2>Login</h2>
        <form>
          <FormItem>
            <label>
              Username
              <input name="username" placeholder="Enter username" />
            </label>
          </FormItem>
          <FormItem>
            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="Enter password"
              />
            </label>
          </FormItem>
          <button type="submit">Log in</button>
        </form>
        <ForgotWrapper>
          <Link to="#">Forgot password?</Link>
        </ForgotWrapper>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
