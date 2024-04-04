import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  width: 100%;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  padding: 10px;
  color: inherit;
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 6px;
`;

export default function SignupInput({ labelContent, inputType, placeHolder }) {
  return (
    <StyledInputContainer>
      <StyledLabel>{labelContent}</StyledLabel>
      <StyledInput type={inputType} placeholder={placeHolder} required />
    </StyledInputContainer>
  );
}
