import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: black;
  width: 100%;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  padding: 10px;
  color: inherit;
  background-color: transparent;
  outline: none;
  border: 1px solid black;
  border-radius: 6px;

  &:focus {
    &::placeholder {
      color: blue;
      transition-duration: 0.5s;
    }
  }

  &::placeholder {
    color: black;
    transition-duration: 0.5s;
  }
`;

export default function SignupInput({
  labelContent,
  inputType,
  placeHolder,
  id,
  register,
  maxLengthValue,
  maxLengthMessage,
  minLengthValue,
  minLengthMessage,
  validateFunction,
  pattern,
  patternMessage,
  registerValue,
  errors,
}) {
  return (
    <StyledInputContainer>
      <StyledLabel>{labelContent}</StyledLabel>
      <>
        <StyledInput
          id={id}
          type={inputType}
          placeholder={placeHolder}
          {...register(registerValue, {
            required: "This field is required",
            maxLength: {
              value: maxLengthValue,
              message: maxLengthMessage,
            },
            minLength: {
              value: minLengthValue,
              message: minLengthMessage,
            },
            pattern: {
              value: pattern,
              message: patternMessage,
            },
            validate: validateFunction,
          })}
        />
      </>
      {errors[registerValue]?.message ? errors[registerValue]?.message : ""}
    </StyledInputContainer>
  );
}
