import styled from "styled-components";

const StyledLoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: auto;
  width: 50vw;
  border: 1px solid yellow;
`;

const StyledHeading = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: underline;
`;

export default function Login() {
  return (
    <StyledLoginContainer>
      <StyledFormContainer>
        <StyledHeading>Welcome back to News-Daily</StyledHeading>
      </StyledFormContainer>
    </StyledLoginContainer>
  );
}
