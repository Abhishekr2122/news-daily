import "./signupformheader.css";

import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";

export default function SignupFormHeader() {
  return (
    <div className="signup-form-header">
      <h1 className="signup-form-heading">
        {/* Welcome to <span style={{ color: "#B9def1" }}>News</span>
        <span style={{ color: "#fcf5d9" }}>Daily</span> */}
        Welcome to News-Daily
      </h1>

      <button className="signup-google-btn">
        <FcGoogle className="signup-google-btn-icon" />
        <span style={{ fontSize: "medium" }}>Signup with Google</span>
        <MdLogin className="signup-google-btn-icon" />
      </button>

      <h4 className="signup-form-sub-heading">Or Signup with Email</h4>
    </div>
  );
}
