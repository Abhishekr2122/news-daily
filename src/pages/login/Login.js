import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import LoginSignupInput from "../ui/LoginInput";
import FormConfirmbtn from "../ui/FormConfirmbtn";
import LoginSignupType from "../ui/LoginType";
import LoginFooter from "../ui/LoginFooter";
import { useState } from "react";
import Spinner from "../ui/Spinner";

const StyledLoginContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(
    to left bottom,
    #27cbde,
    #00b3ee,
    #0097fd,
    #0075ff,
    #1245eb
  );
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeading = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: underline;
`;

const StyledForm = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.5rem;
`;

const StyledFormInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

const StyledPara = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const StyledForgotPasswordBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 4px;
  background-color: transparent;
  color: white;
  border-style: none;
  text-decoration: underline;
  font-size: medium;
  text-align: end;
  cursor: pointer;
  width: 55%;
`;

const StyledRegisterBtn = styled.button`
  background-color: transparent;
  color: white;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: underline;
  padding: 4px;
  font-size: medium;
  cursor: pointer;
`;

export default function Login() {
  const [isForgotPasswordClicked, setIsForgotpasswordClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const navigate = useNavigate();

  function handleForgotPassword(e) {
    e.preventDefault();
    setIsForgotpasswordClicked(true);
    setTimeout(function () {
      navigate("/password");
      setIsForgotpasswordClicked(false);
    }, 1100);
  }

  function handleRegisterClick(e) {
    e.preventDefault();
    setIsRegisterClicked(true);
    setTimeout(function () {
      navigate("/");
      setIsRegisterClicked(false);
    }, 1100);
  }

  return (
    <StyledLoginContainer>
      <StyledFormContainer>
        <StyledHeading>Welcome back to News-Daily</StyledHeading>
        <LoginSignupType
          btnContent1="Login as User"
          btnContent2="Login as Admin"
          paraContent1="Login with Google"
          paraContent2="Or Login with Email"
        />
        <StyledFormInputContainer>
          <StyledForm>
            <LoginSignupInput
              label="E-mail"
              placeholder="Enter your E-mail"
              type="email"
            />

            <LoginSignupInput
              label="Password"
              placeholder="Enter your password"
              type="password"
            >
              <StyledButtonContainer>
                <StyledForgotPasswordBtn onClick={handleForgotPassword}>
                  {isForgotPasswordClicked ? (
                    <Spinner />
                  ) : (
                    "Forgot password click here"
                  )}
                </StyledForgotPasswordBtn>
              </StyledButtonContainer>
            </LoginSignupInput>

            <FormConfirmbtn btnContent="Login" />

            <StyledPara>
              Haven't Registered yet?
              <StyledRegisterBtn onClick={handleRegisterClick}>
                {isRegisterClicked ? <Spinner /> : "Register"}
              </StyledRegisterBtn>
            </StyledPara>
          </StyledForm>
        </StyledFormInputContainer>
        <LoginFooter />
      </StyledFormContainer>
    </StyledLoginContainer>
  );
}
