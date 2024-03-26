import styled from "styled-components";

const StyledLoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right,
    #27cbde,
    #00b3ee,
    #0097fd,
    #0075ff,
    #1245eb
  );
`;

export default function Login() {
  return <StyledLoginContainer></StyledLoginContainer>;
}
