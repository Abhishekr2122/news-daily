import ForgetPassword from "./pages/password/ForgetPassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Password from "./pages/password/Password";
import SetPassword from "./pages/password/SetPassword";
import PasswordConfirm from "./pages/password/PasswordConfirm";
import { Toaster } from "react-hot-toast";

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
            duration: 2000,
            theme: {
              primary: "thistle",
              secondary: "blue",
            },
          },
          error: {
            duration: 2000,
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
