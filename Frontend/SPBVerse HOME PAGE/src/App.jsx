import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "./Pages/Login";           // ← 'pages' lowercase
import ClerkDashboard from "./pages/ClerkDashboard";  // ← FIXED: was './Pages/' (capital P)
=======
import Login from "./Pages/Login";              // ← FIXED: capital P
import ClerkDashboard from "./Pages/ClerkDashboard";  // ← already correct ✅
>>>>>>> 8fc3274c8c0d83026b20b071017be7b98cd57c89

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ClerkDashboard />} />
    </Routes>
  );
}

export default App;