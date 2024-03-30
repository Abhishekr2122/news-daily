import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  color: white;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-weight: bolder;
  font-size: 17px;
`;

const StyledInput = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 1px solid white;
  border-radius: 6px;
  outline: none;
  color: white;

  &:focus {
    &::placeholder {
      color: blue;
      transition-duration: 0.5s;
    }
  }

  &::placeholder {
    color: white;
    transition-duration: 0.5s;
  }
`;

export default function FormInput({
  labelContent,
  placeholderValue,
  inputType,
}) {
  return (
    <StyledInputContainer>
      <StyledLabel>{labelContent}</StyledLabel>
      <StyledInput placeholder={placeholderValue} type={inputType} />
    </StyledInputContainer>
  );
}
