import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import './Signup.css'; // Import your custom styles

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Signup</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Username (PUT ada)"
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password (PUT ada123)"
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })}
        />
      </div>
      <button className="signup-button" onClick={signup}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
