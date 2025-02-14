import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "../pages/callback";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}
