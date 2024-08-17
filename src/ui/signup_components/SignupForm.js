import toast from "react-hot-toast";
import checkAccount from "../../Apis/Signupformapis/checkAccount";
import "./signupform.css";

import SignupFormHeader from "./SignupFormHeader";
import { signupData } from "../../Apis/Signupformapis/handleSignupData";

export default function SignupForm({ children, handleSubmit, reset }) {
  function handleFormData(data) {
    checkAccount().then(function (accountData) {
      const { resData, error } = accountData;
      if (error !== null) {
        toast.error("No Internet Connection ");
      } else {
        if (resData.length > 0) {
          const accountArray = resData.map(function (citem) {
            return citem.email;
          });

          if (accountArray.includes(data.email)) {
            toast.error("This account already exists");
            reset();
          } else {
            signupData({ ...data });
            toast.success("Signup process completed");
          }
        } else {
          signupData({ ...data });
          toast.success("Signup process completed");
        }
      }
    });
  }

  return (
    <div className="signup-form-container">
      <div className="signup-form-sub-container">
        <SignupFormHeader />
        <form onSubmit={handleSubmit(handleFormData)} className="signup-form">
          {children}
        </form>
      </div>
    </div>
  );
}
