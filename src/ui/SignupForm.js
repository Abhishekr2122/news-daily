import { FaGoogle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

import styled from "styled-components";
import useType from "../hooks/useType";
import toast from "react-hot-toast";

import "./signupform.css";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 50vw;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 1s;
`;

const StyledSignupGoogleBtn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 4px;
  width: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const StyledPara1 = styled.p`
  font-size: 15px;
`;

const StyledPara2 = styled.p`
  color: white;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid white;
  padding: 4px;
`;

const StyledFormContainer = styled.div`
  width: 50%;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledFormSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
`;

export default function SignupForm({ children, handleSubmit, type, setType }) {
  function handleFormData(data) {
    console.log("This is the data  submitted while filling the data", data);
    console.log("data");
  }

  return (
    <StyledContainer>
      <StyledBtnContainer>
        <StyledButton
          onClick={function () {
            setType("User");
          }}
          id={`${type === "User" ? "active1" : ""}`}
        >
          Signup as User
        </StyledButton>
        <StyledButton
          onClick={function () {
            setType("Admin");
          }}
          id={`${type === "Admin" ? "active2" : ""}`}
        >
          Signup as Admin
        </StyledButton>
      </StyledBtnContainer>
      <StyledSignupGoogleBtn
        onClick={function () {
          if (!type) {
            toast.error("Please kindly select the Signup type first");
          }
        }}
      >
        <FaGoogle style={{ height: "20px", width: "20px" }} />
        <StyledPara1>Signup with Google</StyledPara1>
        <MdLogin style={{ height: "20px", width: "20px" }} />
      </StyledSignupGoogleBtn>
      <StyledPara2>Or Signup with Email</StyledPara2>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit(handleFormData)}>
          <StyledFormSubContainer>{children}</StyledFormSubContainer>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
}
