import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 50%;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function PasswordForm({ children }) {
  return (
    <StyledFormContainer>
      <StyledForm>{children}</StyledForm>
    </StyledFormContainer>
  );
}
