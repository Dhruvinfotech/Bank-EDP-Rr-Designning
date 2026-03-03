import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();   // this allows page change

  const handleLogin = () => {
    // here later you will check username/password from backend

    // for now assume login successful
    alert("Login successful");

    navigate("/dashboard");   // redirect to dashboard
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

export default Login;
