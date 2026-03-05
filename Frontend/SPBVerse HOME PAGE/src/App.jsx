import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";              // ← FIXED: capital P
import ClerkDashboard from "./Pages/ClerkDashboard";  // ← already correct ✅

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ClerkDashboard />} />
    </Routes>
  );
}

export default App;
