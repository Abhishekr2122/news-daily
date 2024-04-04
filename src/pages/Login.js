import styled from "styled-components";
import { MdOutlineLogin } from "react-icons/md";

import { FaGithub, FaGoogle, FaLinkedin, FaPortrait } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";
import LoginSignupInput from "../ui/LoginInput";
import FormConfirmbtn from "../ui/FormConfirmbtn";
import LoginSignupType from "../ui/LoginType";

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

const StyledComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 6px;
`;

const StyledFormInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
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
          <form
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              gap: "0.5rem",
            }}
          >
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

            <p
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              Haven't Registered yet?
              <NavLink to="/" style={{ color: "white" }}>
                Register here
              </NavLink>
            </p>
          </form>
        </StyledFormInputContainer>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "12px",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <a href="https://github.com/Abhishekr2122" target="noreferrer">
            <FaGithub
              style={{ color: "white", height: "23px", width: "23px" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-shinde1/"
            target="noreferrer"
          >
            <FaLinkedin
              style={{ color: "white", height: "23px", width: "23px" }}
            />
          </a>

          <a
            href="https://github.com/Abhishekr2122?tab=repositories"
            target="noreferrer"
          >
            <GoProjectSymlink
              style={{ color: "white", height: "23px", width: "23px" }}
            />
          </a>

          <a
            href="https://drive.google.com/file/d/1q4onSVqsiyR_1DwU9yF_6LmU-YpRWJOB/view"
            target="noreferrer"
          >
            <ImProfile
              style={{ color: "white", height: "23px", width: "23px" }}
            />
          </a>

          <a
            href="https://abhishek-shinde-portfolio-netlify.netlify.app/"
            target="noreferrer"
          >
            <FaPortrait
              style={{ color: "white", height: "23px", width: "23px" }}
            />
          </a>
        </div>
      </StyledFormContainer>
    </StyledLoginContainer>
  );
}
