import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ClerkDashboard from "./Pages/ClerkDashboard";
// Import the widget from your specific folder structure
import BirthdayWidget from "./Components/Dashboard_Card/BirthdayWidget"; 

function App() {
  return (
    <div className="app-container">
      {/* If you want the birthday widget to show on EVERY page, put it here */}
      <BirthdayWidget /> 

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clerk" element={<ClerkDashboard />} />
      </Routes>
    </div>
  );
}

export default App;