import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import ProfileDrawer from "./ProfileDrawer";
import "../../styles/navbar.css";
import logo from "../../assets/logo.svg"

function Navbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="navbar" className="navbar">

      <div id="navbar-logo" className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="InternGuard" />
        </Link>
      </div>

      {/* Hamburger Button */}
      <button id="navbar-toggle" className={`navbar-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="navbar-content" className={`navbar-content ${menuOpen ? "menu-open" : ""}`}>
        <nav id="navbar-links" className="navbar-links">

          <Link to="/" className="navbar-link" onClick={closeMenu}> Home </Link>
          <Link to="/analyze" className="navbar-link" onClick={closeMenu}> Analyze </Link>
          <Link to="/directory" className="navbar-link" onClick={closeMenu}> Scam insights </Link>
          <Link to="/opportunity" className="navbar-link" onClick={closeMenu}> Opportunities </Link>
          <Link to="/about" className="navbar-link" onClick={closeMenu}> About Us </Link>
          <Link to="/contact" className="navbar-link" onClick={closeMenu}> Contact </Link>

        </nav>

        <div id="navbar-actions" className="navbar-actions">
          {user ? ( <ProfileDrawer />
          ) : (
            <Link to="/register" className="navbar-register" onClick={closeMenu}>
              Register Now
            </Link>
          )}
        </div>

      </div>

    </header>
  );
}

export default Navbar;