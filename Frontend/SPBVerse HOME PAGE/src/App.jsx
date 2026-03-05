import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";           // ← 'pages' lowercase
import ClerkDashboard from "./pages/ClerkDashboard";  // ← FIXED: was './Pages/' (capital P)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ClerkDashboard />} />
    </Routes>
  );
}

export default App;