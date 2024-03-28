import { IoMdLock } from "react-icons/io";
import ContentContainer from "./ContentContainer";
import PasswordLogo from "./PasswordLogo";
import PasswordHeading from "./PasswordHeading";
import PasswordSubHeading from "./PasswordSubHeading";
import PasswordForm from "./PasswordForm";
import FormInput from "./FormInput";
import FormConfirmbtn from "./FormConfirmbtn";
import BacktoLoginbtn from "./BacktoLoginbtn";

export default function Password() {
  return (
    <ContentContainer>
      <PasswordLogo
        logoElement={
          <IoMdLock style={{ color: "white", height: "40px", width: "40px" }} />
        }
      />

      <PasswordHeading headingContent="Forgot your password?" />

      <PasswordSubHeading headingContent="Enter your email to reset it!" />

      <PasswordForm>
        <FormInput
          labelContent="E-mail"
          placeholderValue="Enter your E-mail"
          inputType="email"
        />

        <FormConfirmbtn btnContent="Confirm" />

        <BacktoLoginbtn />
      </PasswordForm>
    </ContentContainer>
  );
}
