import styled from "styled-components";
import { MdOutlineLogin } from "react-icons/md";

import { FaGithub, FaGoogle, FaLinkedin, FaPortrait } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GoProjectSymlink } from "react-icons/go";

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
        <StyledComponentContainer>
          <StyledBtnContainer>
            <button
              style={{
                padding: "10px",
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login as User
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login as Admin
            </button>
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
            <p style={{ fontSize: "15px" }}>Login with Google</p>
            <MdOutlineLogin style={{ height: "20px", width: "20px" }} />
          </button>
          <p
            style={{
              color: "white",
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid white",
            }}
          >
            Or Login with Email
          </p>
        </StyledComponentContainer>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                style={{
                  backgroundColor: "transparent",
                  padding: "10px",
                  border: "1px solid white",
                  borderRadius: "6px",
                  color: "inherit",
                  outline: "none",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                style={{
                  backgroundColor: "transparent",
                  padding: "10px",
                  border: "1px solid white",
                  borderRadius: "6px",
                  color: "inherit",
                  outline: "none",
                }}
              />

              <a
                href="https://github.com/Abhishekr2122"
                target="noreferrer"
                style={{ color: "white", textAlign: "end", fontSize: "12px" }}
              >
                Forget your password?
              </a>
            </div>

            <button
              style={{
                padding: "12px",
                backgroundColor: "white",
                width: "100%",
                border: "1px solid white",
                color: "#0D30EA",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
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
              <a
                href="https://github.com/Abhishekr2122"
                target="noreferrer"
                style={{ color: "white" }}
              >
                Register here
              </a>
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
