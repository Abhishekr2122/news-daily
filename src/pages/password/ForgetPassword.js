import styled from "styled-components";
import { IoMdLock } from "react-icons/io";

import PasswordLogo from "./PasswordLogo";
import PasswordHeading from "./PasswordHeading";
import PasswordSubHeading from "./PasswordSubHeading";
import PasswordForm from "./PasswordForm";
import FormInput from "./FormInput";
import FormConfirmbtn from "./FormConfirmbtn";
import BacktoLoginbtn from "./BacktoLoginbtn";
import ContentContainer from "./ContentContainer";
import Password from "./Password";

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

export default function ForgetPassword() {
  return (
    <StyledMainContainer>
      <Password />
    </StyledMainContainer>
  );
}
