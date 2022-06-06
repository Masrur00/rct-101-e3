import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink

const Navbar = () => {
  const [isAuth, toggledAuth] = useContext(AuthContext);
  const [count] = useContext(CartContext);
  const nav = useNavigate();
  return (
    <div
      data-cy="navbar"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <Link data-cy="navbar-home-link" to="/">
        Home
      </Link>
      <span data-cy="navbar-cart-items-count">{count}</span>
      <button
        data-cy="navbar-login-logout-button"
        onClick={() => {
          // toggledAuth();
          // nav("/login");
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
