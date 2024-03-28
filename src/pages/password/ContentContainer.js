import styled from "styled-components";

const StyledContainer = styled.div`
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
  gap: 0.5rem;
`;

export default function ContentContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
