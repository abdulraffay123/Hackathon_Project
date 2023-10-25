import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../../Screen/Signup/Signup";
import Login from "../../Screen/Login/Login";
import Dashborad from "../../Screen/Dashborad/Dashborad";
import Protected from "../../Screen/Protected";
import ModuleNotFound from "../../Screen/ModuleNotFOund/ModuleNotFound";
import SecondApp from "../../Screen/Dashborad/DashbaordSecond";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Screen={Dashborad} />} />
          <Route path="signp" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="sconddashbaord" element={<SecondApp />} />
          <Route path="*" element={<ModuleNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
