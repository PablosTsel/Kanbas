import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import './Signin.css'; // Import your custom styles

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };

  return (
    <div className="signin-container">
      <h1 className="signin-heading">Sign In</h1>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Username (PUT ada)"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password (PUT ada123)"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </div>
      <button className="signin-button" onClick={signin}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;