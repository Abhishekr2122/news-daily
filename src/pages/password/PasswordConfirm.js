import BacktoLoginbtn from "./BacktoLoginbtn";
import ContentContainer from "./ContentContainer";
// import FormConfirmbtn from "../../ui/FormConfirmbtn";
import PasswordForm from "./PasswordForm";
import PasswordHeading from "./PasswordHeading";
import PasswordLogo from "./PasswordLogo";
import { TiTick } from "react-icons/ti";

export default function PasswordConfirm() {
  return (
    <ContentContainer>
      <PasswordLogo
        logoElement={
          <TiTick style={{ color: "white", height: "40px", width: "40px" }} />
        }
      />
      <PasswordHeading headingContent="Password Reset!" />
      <div>
        <div style={{ color: "white", textAlign: "center" }}>
          Your password has been successfully
        </div>
        <div style={{ color: "white", textAlign: "center" }}>
          reset,click below to continue your access
        </div>
      </div>

      <PasswordForm>
        {/* <FormConfirmbtn btnContent="Confirm" /> */}
        <BacktoLoginbtn />
      </PasswordForm>
    </ContentContainer>
  );
}
