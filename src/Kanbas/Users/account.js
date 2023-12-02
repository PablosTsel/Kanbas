import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as client from "./client";
import './Account.css'; // Import your custom styles

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Signin");
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="account-container">
      <h1 className="account-heading">ACCOUNT</h1>
      {account && (
        <div className="account-form">
          <input
            className="account-input"
            type="password"
            placeholder="Password"
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
          <input
            className="account-input"
            type="text"
            placeholder="First Name"
            value={account.firstName}
            onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
          />
          <input
            className="account-input"
            type="text"
            placeholder="Last Name"
            value={account.lastName}
            onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
          />
          <input
            className="account-input"
            type="text"
            placeholder="Date of Birth"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="account-input"
            type="email"
            placeholder="Email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="account-select"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="account-button" onClick={save}>
            Save
          </button>
          <button className="account-button" onClick={signout}>
            Signout
          </button>
          <Link to="/Kanbas/table" className="account-link">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}

export default Account;
