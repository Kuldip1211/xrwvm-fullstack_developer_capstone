import LoginPanel from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPanel />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;