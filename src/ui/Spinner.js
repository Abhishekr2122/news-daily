import styled from "styled-components";

const StyledSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  animation: spin 1s linear infinite;
  /* margin: 50px auto; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return <StyledSpinner />;
}
