import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ClerkDashboard from "./Pages/ClerkDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/clerk" element={<ClerkDashboard />} />
    </Routes>
  );
}

export default App;
