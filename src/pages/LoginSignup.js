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
const StyledConatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const StyledSubContainer1 = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
      <StyledSubContainer1>
        <div
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <SiDesignernews
            style={{ color: "blue", height: "55px", width: "55px" }}
          />
          <h2 style={{ color: "black", fontSize: "30px" }}>Daily-News</h2>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "12px",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <FaGithub style={{ color: "blue", height: "23px", width: "23px" }} />
          <FaLinkedin
            style={{ color: "blue", height: "23px", width: "23px" }}
          />
          <GoProjectSymlink
            style={{ color: "blue", height: "23px", width: "23px" }}
          />
          <ImProfile style={{ color: "blue", height: "23px", width: "23px" }} />
          <FaPortrait
            style={{ color: "blue", height: "23px", width: "23px" }}
          />
        </div>
      </StyledSubContainer1>
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
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            <FaGoogle style={{ height: "20px", width: "20px" }} />
            <p style={{ fontSize: "15px" }}>Log in with Google</p>
            <MdLogin style={{ height: "20px", width: "20px" }} />
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
