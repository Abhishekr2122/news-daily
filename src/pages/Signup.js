import styled from "styled-components";
import { SiDesignernews } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { FaPortrait } from "react-icons/fa";
import SignupForm from "../ui/SignupForm";
import SignupInput from "../ui/SignupInput";
import { useForm } from "react-hook-form";
import SignupFooter from "../ui/SignupFooter";
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

const StyledHeader = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 5%;
`;

const StyledHeaderHeading = styled.h2`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  height: 50%;
`;

export default function Signup() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  return (
    <StyledConatiner>
      <StyledSubContainer1>
        <StyledHeader>
          <SiDesignernews
            style={{ color: "blue", height: "55px", width: "55px" }}
          />

          <StyledHeaderHeading>Daily-News</StyledHeaderHeading>
        </StyledHeader>
        <SignupFooter />
      </StyledSubContainer1>

      <StyledSubContainer2>
        <StyledHeading>Come let's join News-Daily</StyledHeading>
        <SignupForm handleSubmit={handleSubmit}>
          <SignupInput
            labelContent="FirstName"
            inputType="text"
            placeHolder="Enter your First Name"
            id="firstName"
            register={register}
            minLengthValue={2}
            minLengthMessage="Name should be greater than 2 letters"
          />
          <SignupInput
            labelContent="LastName"
            inputType="text"
            placeHolder="Enter your Last Name"
            id="lastName"
            register={register}
            minLengthValue={2}
            minLengthMessage="Name should be greater than 2 letters"
          />
          <SignupInput
            labelContent="E-mail"
            inputType="email"
            placeHolder="Enter your E-mail "
            register={register}
            id="email"
            pattern={`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`}
            patternMessage="This is invalid email"
          />

          <SignupInput
            labelContent="Password"
            inputType="password"
            placeHolder="Enter your password"
            register={register}
            id="password"
            minLengthValue={4}
            minLengthMessage="The password should be of min 4 characters "
            maxLengthValue={8}
            maxLengthMessage="The password should be of max 8 characters"
            pattern={`^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+}{":;'?/>.<,|\-]{8,}$`}
            patternMessage="Password is not in proper format"
          />
        </SignupForm>
      </StyledSubContainer2>
    </StyledConatiner>
  );
}
