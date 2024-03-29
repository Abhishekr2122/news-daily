import ForgetPassword from "./pages/password/ForgetPassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Password from "./pages/password/Password";
import SetPassword from "./pages/password/SetPassword";
import PasswordConfirm from "./pages/password/PasswordConfirm";

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
    </BrowserRouter>
  );
}

export default App;
