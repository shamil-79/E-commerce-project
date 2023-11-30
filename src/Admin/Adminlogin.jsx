import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Adminlogin = ({setIsAdminLog,isadminlog}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const nav = useNavigate();

  const handleLogin = () => {
    const predefinedEmail = "shamil@gmail.com";
    const predefinedPassword = "shamil";

    if (email === predefinedEmail && password === predefinedPassword) {
        setIsAdminLog(true);
    } else {
      alert("Invalid credentials");
    }

    if (isadminlog) {
      alert("Wlecome Creater");
      nav("/admin");
    }
  };

  return (
    <div>
      <h2>Login</h2><br/><br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <Button variant="danger" onClick={handleLogin}>Login</Button>
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

export default Adminlogin;
