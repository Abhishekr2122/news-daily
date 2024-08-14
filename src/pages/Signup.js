import styled from "styled-components";
import { SiDesignernews } from "react-icons/si";
import SignupForm from "../ui/SignupForm";
import SignupInput from "../ui/SignupInput";
import { useForm } from "react-hook-form";
import SignupFooter from "../ui/SignupFooter";
import inputValidation from "../handlers/inputValidation";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";

const StyledConatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  /* background-image: linear-gradient(
    to left top,
    #141ae1,
    #005ffe,
    #0088ff,
    #00a9f9,
    #12c6eb
  ); */
  /* background-color: blue; */
`;

const StyledSubContainer1 = styled.div`
  height: 100%;
  width: 50%;
  /* background-color: aliceblue; */

  background-image: url("./new-news-image.jpg");
  background-repeat: no-repeat;
  background-size: contain;
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

// const StyledHeader = styled.div`
//   width: 100%;
//   padding: 20px;
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   height: 5%;
// `;

// const StyledHeaderHeading = styled.h2`
//   font-size: 22px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: white;
//   height: 50%;
// `;

const StyledFormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const StyledFormPara = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: black;
`;

const StyledFormLoginBtn = styled.button`
  background-color: transparent;
  text-decoration: underline;
  border-style: none;
  font-size: 14px;
  cursor: pointer;
  color: black;
`;

const StyledFormBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledFormButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: black;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 1s;
`;

export default function Signup() {
  const [isLogging, setIsLogging] = useState(false);
  const [type, setType] = useState("");
  const { register, handleSubmit, reset, formState } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;

  return (
    <StyledConatiner>
      <StyledSubContainer1></StyledSubContainer1>

      <StyledSubContainer2>
        <StyledHeading>Come let's join News-Daily</StyledHeading>
        <SignupForm
          handleSubmit={handleSubmit}
          reset={reset}
          type={type}
          setType={setType}
        >
          <SignupInput
            labelContent="FirstName"
            inputType="text"
            placeHolder="Enter your First Name"
            id="firstName"
            register={register}
            registerValue="firstName"
            minLengthValue={2}
            minLengthMessage="Name should be greater than 2 letters"
            validateFunction={inputValidation}
            errors={errors}
          />
          <SignupInput
            labelContent="LastName"
            inputType="text"
            placeHolder="Enter your Last Name"
            id="lastName"
            register={register}
            registerValue="lastName"
            minLengthValue={2}
            minLengthMessage="Name should be greater than 2 letters"
            validateFunction={inputValidation}
            errors={errors}
          />
          <SignupInput
            labelContent="E-mail"
            inputType="email"
            placeHolder="Enter your E-mail"
            id="email"
            register={register}
            registerValue="email"
            pattern={`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`}
            patternMessage="This is invalid email"
            errors={errors}
          />

          <SignupInput
            labelContent="Password"
            inputType="password"
            placeHolder="Enter your password"
            id="password"
            register={register}
            registerValue="password"
            minLengthValue={4}
            minLengthMessage="The password should be of min 4 characters "
            maxLengthValue={8}
            maxLengthMessage="The password should be of max 8 characters"
            pattern={`^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+}{":;'?/>.<,|\-]{8,}$`}
            patternMessage="Password is not in proper format"
            errors={errors}
          />
          <StyledFormContent>
            <StyledFormPara>
              Haven't Loggedin yet?
              {isLogging ? (
                <Spinner />
              ) : (
                <StyledFormLoginBtn
                  onClick={function () {
                    setIsLogging(true);
                    setTimeout(function () {
                      setIsLogging(false);
                      navigate("login");
                    }, 1100);
                  }}
                >
                  Login
                </StyledFormLoginBtn>
              )}
            </StyledFormPara>
          </StyledFormContent>
          <StyledFormBtnContainer>
            <StyledFormButton type="submit">Signup</StyledFormButton>
            <StyledFormButton
              onClick={function () {
                reset();
              }}
            >
              Cancel
            </StyledFormButton>
          </StyledFormBtnContainer>
        </SignupForm>
      </StyledSubContainer2>
    </StyledConatiner>
  );
}
