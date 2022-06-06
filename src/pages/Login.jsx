import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [isAuth, toggledAuth] = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    // e.preventDefault();
    if (email && password) toggledAuth();
  };

  if (isAuth) return <Navigate to="/home" />;
  return (
    <div>
      <input data-cy="login-email" onChange={(e) => setEmail(e.target.value)} />
      <input
        data-cy="login-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-cy="login-submit" onClick={() => handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
