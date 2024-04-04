import { FaGoogle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 50vw;
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
  gap: 1rem;
  width: 100%;
`;

const StyledPara3 = styled.p`
  color: white;
`;

export default function SignupForm({ children }) {
  return (
    <StyledContainer>
      <StyledBtnContainer>
        <StyledButton>Signup as User</StyledButton>
        <StyledButton>Signup as Admin</StyledButton>
      </StyledBtnContainer>
      <StyledSignupGoogleBtn>
        <FaGoogle style={{ height: "20px", width: "20px" }} />
        <StyledPara1>Signup with Google</StyledPara1>
        <MdLogin style={{ height: "20px", width: "20px" }} />
      </StyledSignupGoogleBtn>
      <StyledPara2>Or Signup with Email</StyledPara2>
      <StyledFormContainer>
        <StyledForm>
          <StyledFormSubContainer>{children}</StyledFormSubContainer>
        </StyledForm>
        <StyledPara3>
          Haven't Loggedin yet?
          <NavLink to="/login" style={{ color: "white" }}>
            Login
          </NavLink>
        </StyledPara3>
      </StyledFormContainer>
    </StyledContainer>
  );
}
