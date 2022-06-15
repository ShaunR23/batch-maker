import React from "react";
import Login from "./Login";
import Register from "./Register.js";
import SideNav from "./SideNav";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function App(handleError) {
  const [isAuth, setAuth] = useState(null);
  const [isAdmin, setAdmin] = useState(null);

  const checkAuth = async () => {
    const response = await fetch("/rest-auth/user/", {
      headers: {
        Authorization: Cookies.get("Authorization"),
      },
    });
    if (!response.ok) {
      setAuth(false);
      return;
    }
    const data = await response.json();
    setAuth(true);
    setAdmin(data.is_superuser);
  };

  const handleLogout = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X=CSRFToken": Cookies.get("csrftoken"),
      },
    };
    const response = await fetch("/rest-auth/logout", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    setAuth(false);
    Cookies.remove("Authorization");
  };

  const contextProps = {
    isAdmin,
    isAuth,
    setAdmin,
    setAuth,
  };

  return (
    <>
      <Header />
      <SideNav />
      <Outlet context={{ ...contextProps }} />
    </>
  );
}
export default App;
