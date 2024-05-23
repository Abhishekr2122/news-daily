import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoginSignupInput from "../ui/LoginInput";
import FormConfirmbtn from "../ui/FormConfirmbtn";
import LoginSignupType from "../ui/LoginType";
import LoginFooter from "../ui/LoginFooter";

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

export default function Login() {
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
              <NavLink
                to="/password"
                style={{ color: "white", textAlign: "end" }}
              >
                Forgot your password?
              </NavLink>
            </LoginSignupInput>

            <FormConfirmbtn btnContent="Login" />

            <StyledPara>
              Haven't Registered yet?
              <NavLink to="/" style={{ color: "white" }}>
                Register here
              </NavLink>
            </StyledPara>
          </StyledForm>
        </StyledFormInputContainer>
        <LoginFooter />
      </StyledFormContainer>
    </StyledLoginContainer>
  );
}
