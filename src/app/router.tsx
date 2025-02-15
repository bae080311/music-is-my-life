import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "../pages/callback";
import Login from "../pages/login/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}
