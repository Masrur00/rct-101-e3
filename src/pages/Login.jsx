import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [isAuth, toggledAuth] = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isAuth);
    if (email && password) {
      toggledAuth();
      console.log(isAuth);
      return nav("/");
    }
  };

  if (isAuth) return <Navigate to="/" />;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-cy="login-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button data-cy="login-submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
