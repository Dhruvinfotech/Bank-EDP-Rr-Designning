import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ClerkDashboard from "./Pages/ClerkDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ClerkDashboard />} />
    </Routes>
  );
}

export default App;
