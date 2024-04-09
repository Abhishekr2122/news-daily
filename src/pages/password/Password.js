import { IoMdLock } from "react-icons/io";
import ContentContainer from "./ContentContainer";
import PasswordLogo from "./PasswordLogo";
import PasswordHeading from "./PasswordHeading";
import PasswordSubHeading from "./PasswordSubHeading";
import PasswordForm from "./PasswordForm";
import FormInput from "./FormInput";
import FormConfirmbtn from "../../ui/FormConfirmbtn";
import BacktoLoginbtn from "./BacktoLoginbtn";
import { useForm } from "react-hook-form";

export default function Password() {
  const { register, handleSubmit, formState } = useForm();

  return (
    <ContentContainer>
      <PasswordLogo
        logoElement={
          <IoMdLock style={{ color: "white", height: "40px", width: "40px" }} />
        }
      />

      <PasswordHeading headingContent="Forgot your password?" />

      <PasswordSubHeading headingContent="Enter your email to reset it!" />

      <PasswordForm handleSubmit={handleSubmit}>
        <FormInput
          labelContent="E-mail"
          placeholderValue="Enter your E-mail"
          inputType="email"
          register={register}
        />

        <FormConfirmbtn btnContent="Confirm" />

        <BacktoLoginbtn />
      </PasswordForm>
    </ContentContainer>
  );
}
