import BacktoLoginbtn from "./BacktoLoginbtn";
import ContentContainer from "./ContentContainer";
// import FormConfirmbtn from "../../ui/FormConfirmbtn";
import FormInput from "./FormInput";
import PasswordForm from "./PasswordForm";
import PasswordHeading from "./PasswordHeading";
import PasswordLogo from "./PasswordLogo";
import { FaKey } from "react-icons/fa";

export default function SetPassword() {
  return (
    <ContentContainer>
      <PasswordLogo
        logoElement={
          <FaKey style={{ color: "white", height: "40px", width: "40px" }} />
        }
      />
      <PasswordHeading headingContent="Set your new password" />
      <div>
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "200",
          }}
        >
          Your new password should be different from
        </div>
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "200",
          }}
        >
          password previously used.
        </div>
      </div>
      <PasswordForm>
        <FormInput
          labelContent="Password"
          placeholderValue="Enter your new password"
          inputType="password"
        />
        <FormInput
          labelContent="Confirm your new password"
          placeholderValue="Re-enter your new password"
          inputType="password"
        />
        {/* <FormConfirmbtn btnContent="confirm" /> */}
        <BacktoLoginbtn />
      </PasswordForm>
    </ContentContainer>
  );
}
