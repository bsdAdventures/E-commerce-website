import React from "react";
import "./sign-in-sign-up.styles.scss";
import { SignIn, SignUp } from "../../components";

export const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
