import styled from "styled-components";
import { IoMdLock } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const StyledMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to top,
    #1a2cda,
    #006cfe,
    #0097ff,
    #00bcf8,
    #12dceb
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContentContainer = styled.div`
  height: auto;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ForgetPassword() {
  return (
    <StyledMainContainer>
      <StyledContentContainer>
        <div
          style={{
            border: "1px solid white",
            padding: "30px",
            borderRadius: "50px",
          }}
        >
          <IoMdLock style={{ color: "white", height: "40px", width: "40px" }} />
        </div>
        <h1
          style={{
            color: "white",
            textAlign: "start",
            width: "50%",
            textDecoration: "underline",
          }}
        >
          Forgot your password?
        </h1>
        <h3
          style={{
            color: "white",
            textAlign: "start",
            width: "50%",
            marginTop: "0px",
            fontWeight: "200",
          }}
        >
          Enter your email to reset it!
        </h3>

        <div style={{ width: "50%" }}>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "1rem",
                color: "white",
                width: "100%",
              }}
            >
              <label style={{ fontWeight: "bolder", fontSize: "17px" }}>
                E-mail
              </label>
              <input
                type="email"
                placeholder="Enter your E-mail"
                style={{
                  backgroundColor: "transparent",
                  padding: "10px",
                  border: "1px solid white",
                  borderRadius: "6px",
                  width: "94%",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
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
                Confirm
              </button>
            </div>

            <button
              style={{
                backgroundColor: "transparent",
                width: "100%",
                borderStyle: "none",
                color: "#0D30EA",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <IoMdArrowBack
                style={{ color: "white", height: "20px", width: "20px" }}
              />
              <h3 style={{ color: "white" }}>Return to the login screen</h3>
            </button>
          </form>
        </div>
      </StyledContentContainer>
    </StyledMainContainer>
  );
}
