import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        color: "wheat",
        backgroundColor: "blue",
        display: "block",
        justifyContent: "center",
      }}
    >
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="services">Services</Link>
    </nav>
  );
}

export default Navbar;
