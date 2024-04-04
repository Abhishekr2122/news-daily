import styled from "styled-components";
import Button from "../ui/Button";
import { FaGoogle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { SiDesignernews } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { FaPortrait } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FormConfirmbtn from "../ui/FormConfirmbtn";
import SignupForm from "../ui/SignupForm";
import SignupInput from "../ui/SignupInput";
const StyledConatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  background-image: linear-gradient(
    to left top,
    #141ae1,
    #005ffe,
    #0088ff,
    #00a9f9,
    #12c6eb
  );
`;

const StyledSubContainer1 = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: white;
  background-image: url("/Sign up-rafiki.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledSubContainer2 = styled.div`
  height: 100%;
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: white;
  width: 100%;
  text-decoration: underline;
  font-size: 30px;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 50vw;
`;

export default function Signup() {
  // const [type, setType] = useState(null);

  // function handleType(type) {
  //   setType(type);
  // }

  return (
    <StyledConatiner>
      <StyledSubContainer1>
        <div
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            gap: "1rem",

            height: "5%",
          }}
        >
          <SiDesignernews
            style={{ color: "blue", height: "55px", width: "55px" }}
          />
          <h2
            style={{
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              height: "50%",
            }}
          >
            Daily-News
          </h2>
        </div>
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
      </StyledSubContainer1>

      <StyledSubContainer2>
        <StyledHeading>Come let's join News-Daily</StyledHeading>
        <SignupForm>
          <SignupInput
            labelContent="FirstName"
            inputType="text"
            placeHolder="Enter your First Name"
          />
          <SignupInput
            labelContent="LastName"
            inputType="text"
            placeHolder="Enter your Last Name"
          />
          <SignupInput
            labelContent="E-mail"
            inputType="email"
            placeHolder="Enter your E-mail "
          />
          <SignupInput
            labelContent="Password"
            inputType="password"
            placeHolder="Enter your password"
          />
        </SignupForm>
      </StyledSubContainer2>
    </StyledConatiner>
  );
}
