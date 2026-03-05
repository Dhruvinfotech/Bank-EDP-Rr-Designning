import { useNavigate } from "react-router-dom";

function Login() {          // ← FIXED: was 'login' (lowercase), must be 'Login'

  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login successful");
    navigate("/dashboard");
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Bank Login</h1>

      <input type="text" placeholder="Username" /><br/><br/>
      <input type="password" placeholder="Password" /><br/><br/>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;       // ← Already correct ✅