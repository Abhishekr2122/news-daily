import styled from "styled-components";

const StyledConatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const StyledSubContainer1 = styled.div`
  height: 100%;
  width: 50%;
`;

const StyledSubContainer2 = styled.div`
  height: 100%;
  width: 50%;
`;

const StyledFormContainer = styled.div``;

export default function LoginSignup() {
  return (
    <StyledConatiner>
      <StyledSubContainer1>Its the LoginSignup page</StyledSubContainer1>
      <StyledSubContainer2>
        <StyledFormContainer></StyledFormContainer>
      </StyledSubContainer2>
    </StyledConatiner>
  );
}
