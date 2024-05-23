import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 1px solid white;
  border-radius: 6px;
  color: white;
  outline: none;

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

export default function LoginSignupInput({
  label,
  placeholder,
  type,
  children,
  id,
  register,
  maxLengthValue,
  maxLengthMessage,
  minLengthvalue,
  minLengthMessage,
  validateFunction,
  pattern,
  patternMessage,
}) {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type={type}
        id={id}
        // {...register(id, {
        //   required: "This field is required",
        //   maxLength: {
        //     value: maxLengthValue,
        //     message: maxLengthMessage,
        //   },
        //   minLength: {
        //     value: minLengthvalue,
        //     message: minLengthMessage,
        //   },
        //   validate: validateFunction,
        //   pattern: {
        //     value: pattern,
        //     message: patternMessage,
        //   },
        // })}
      />
      {children}
    </StyledInputContainer>
  );
}
