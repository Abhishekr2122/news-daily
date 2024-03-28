import styled from "styled-components";
import { IoMdLock } from "react-icons/io";

import PasswordLogo from "./PasswordLogo";
import PasswordHeading from "./PasswordHeading";
import PasswordSubHeading from "./PasswordSubHeading";
import PasswordForm from "./PasswordForm";
import FormInput from "./FormInput";
import FormConfirmbtn from "./FormConfirmbtn";
import BacktoLoginbtn from "./BacktoLoginbtn";

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
  padding: 20px;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.01);
`;

export default function ForgetPassword() {
  return (
    <StyledMainContainer>
      <StyledContentContainer>
        <PasswordLogo
          logoElement={
            <IoMdLock
              style={{ color: "white", height: "40px", width: "40px" }}
            />
          }
        />

        <PasswordHeading headingContent="Forgot your password?" />

        <PasswordSubHeading headingContent="Enter your email to reset it!" />

        <PasswordForm>
          <FormInput
            labelContent="E-mail"
            placeholderValue="Enter your E-mail"
            inputType="email"
          />

          <FormConfirmbtn btnContent="Confirm" />

          <BacktoLoginbtn />
        </PasswordForm>
      </StyledContentContainer>
    </StyledMainContainer>
  );
}
