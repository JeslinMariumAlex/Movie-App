import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Importing CSS for styling

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">ZaPpY!!</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
