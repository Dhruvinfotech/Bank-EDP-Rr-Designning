import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Example logic: In a real app, this comes from your API response
    const userRole = "EDP_ADMIN"; 

    if (userRole === "EDP_ADMIN") {
      navigate("/edp-dashboard"); // Redirect to your IT management page
    } else {
      navigate("/home"); // Redirect to standard customer home page
    }
  };

  return (
    // Your Figma-inspired Login UI here
    <button onClick={handleLogin}>Secure Login</button>
  );
};
