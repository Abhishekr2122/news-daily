import styled from "styled-components";

import Password from "./Password";
import SetPassword from "./SetPassword";
import PasswordConfirm from "./PasswordConfirm";

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
      {/* <SetPassword /> */}
      {/* <PasswordConfirm /> */}
    </StyledMainContainer>
  );
}
