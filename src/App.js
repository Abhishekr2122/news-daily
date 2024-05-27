import { createClient } from "@supabase/supabase-js";

import ForgetPassword from "./pages/password/ForgetPassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Password from "./pages/password/Password";
import SetPassword from "./pages/password/SetPassword";
import PasswordConfirm from "./pages/password/PasswordConfirm";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { signupData } from "./Apis/Signupformapis/handleSignupData";

export const supabase = createClient(
  "https://nmbnhupahyfzmscjrijv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYm5odXBhaHlmem1zY2pyaWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MTQxMjEsImV4cCI6MjAyODA5MDEyMX0.Cj4zx9okdTu2PxymCUeAAqX3Wh7ivo5XQC6h-J-J3Co"
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<ForgetPassword />}>
          <Route index element={<Password />} />
          <Route path="resetpassword" element={<SetPassword />} />
          <Route path="passworddone" element={<PasswordConfirm />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          success: {
            duration: 1500,
            theme: {
              primary: "thistle",
              secondary: "blue",
            },
          },
          error: {
            duration: 1500,
            theme: {
              primary: "cyan",
              secondary: "red",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
