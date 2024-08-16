import "./signupinput.css";

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
    <div className="signup-input">
      <label>{labelContent}</label>
      <input
        id={id}
        type={inputType}
        placeholder={placeHolder}
        {...register(registerValue, {
          required: "This field is required",
          maxLength: { value: maxLengthValue, message: maxLengthMessage },
          minLength: { value: minLengthValue, message: minLengthMessage },
          pattern: {
            value: pattern,
            message: patternMessage,
          },
          validate: validateFunction,
        })}
      />
      {errors[registerValue]?.message ? errors[registerValue]?.message : ""}
    </div>
  );
}
