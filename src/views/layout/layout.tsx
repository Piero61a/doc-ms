import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <div className="container">
      <Outlet />
      <footer className="navbar navbar-dark bg-dark "></footer>
    </div>
  );
}

export default Layout;
