import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ userid: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for Bank EDP Role-based access
    if (credentials.userid === 'admin') {
      navigate('/clerk');
    } else {
      alert("Invalid Credentials for EDP System");
    }
  };

  return (
    <div className="login-container">
      <h2>Bank EDP - Secure Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="User ID" 
          onChange={(e) => setCredentials({...credentials, userid: e.target.value})} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
        />
        <button type="submit">Login to System</button>
      </form>
    </div>
  );
};

// This line fixes the "default is not exported" error!
export default Login;
