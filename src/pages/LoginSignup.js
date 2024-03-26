import styled from "styled-components";
import Button from "../ui/Button";

const StyledConatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const StyledSubContainer1 = styled.div`
  height: 100%;
  width: 45%;
  background-color: #f2f4ff;
  color: white;
  background-image: url("/Sign up-rafiki.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledSubContainer2 = styled.div`
  height: 100%;
  width: 55%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: white;
  width: 100%;
  text-decoration: underline;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledFormContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 50vw;
`;

export default function LoginSignup() {
  return (
    <StyledConatiner>
      <StyledSubContainer1></StyledSubContainer1>
      <StyledSubContainer2>
        <StyledHeading>Welcome back to News-Daily</StyledHeading>
        <StyledFormContainer>
          <StyledBtnContainer>
            <Button
              content="Login as User"
              style={{ color: "white", backgroundColor: "transparent" }}
            />
            <Button
              content="Login as Admin"
              style={{ color: "white", backgroundColor: "transparent" }}
            />
          </StyledBtnContainer>
          <button
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "4px",
              padding: "4px",
              width: "50%",
            }}
          >
            <p>Log in with Google</p>
          </button>

          <p
            style={{
              color: "white",
              width: "50%",
              textAlign: "center",
            }}
          >
            Or Login with Email
          </p>
        </StyledFormContainer>
      </StyledSubContainer2>
    </StyledConatiner>
  );
}
