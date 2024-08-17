import "./signup.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import inputValidation from "../../handlers/inputValidation";

import Spinner from "../../ui/Spinner";
import SignupImage from "../../ui/signup_components/SignupImage";
import SignupForm from "../../ui/signup_components/SignupForm";
import SignupInput from "../../ui/signup_components/SignupInput";

export default function Signup() {
  const [isLogging, setIsLogging] = useState(false);
  const [type, setType] = useState("");
  const { register, handleSubmit, reset, formState } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;

  function handleLoginBtn() {
    setIsLogging(true);
    setTimeout(function () {
      setIsLogging(false);
    }, 1100);
  }

  return (
    <div className="signup">
      <SignupImage />
      <SignupForm handleSubmit={handleSubmit} reset={reset}>
        <SignupInput
          labelContent="FirstName"
          inputType="text"
          placeHolder="Enter your First Name"
          id="firstName"
          register={register}
          registerValue="firstName"
          minLengthValue={2}
          minLengthMessage="Name should be greater than 2 letters"
          validateFunction={inputValidation}
          errors={errors}
        />
        <SignupInput
          labelContent="LastName"
          inputType="text"
          placeHolder="Enter your Last Name"
          id="lastName"
          register={register}
          registerValue="lastName"
          minLengthValue={2}
          minLengthMessage="Name should br greater than 2 letters"
          validateFunction={inputValidation}
          errors={errors}
        />
        <SignupInput
          labelContent="E-mail"
          inputType="email"
          placeHolder="Enter your E-mail"
          id="email"
          register={register}
          registerValue="email"
          pattern={`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`}
          patternMessage="This is invalid email"
          errors={errors}
        />
        <SignupInput
          labelContent="password"
          inputType="password"
          placeHolder="Enter your password"
          register={register}
          registerValue="password"
          minLengthValue={4}
          minLengthMessage="The password should be of min 4 characters "
          maxLengthValue={8}
          maxLengthMessage="The password should be of max 8 characters"
          pattern={`^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+}{":;'?/>.<,|\-]{8,}$`}
          patternMessage="Password is not in proper format"
          errors={errors}
        />

        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Haven't Loggedin yet?{" "}
          {isLogging ? (
            <Spinner />
          ) : (
            <button onClick={handleLoginBtn}>Login</button>
          )}
        </p>

        <div className="signup-btn-container">
          <button type="submit" className="form-action-btn">
            Signup
          </button>
          <button
            onClick={function () {
              reset();
            }}
            type="reset"
            className="form-action-btn"
          >
            Cancel
          </button>
        </div>
      </SignupForm>
    </div>
  );
}
