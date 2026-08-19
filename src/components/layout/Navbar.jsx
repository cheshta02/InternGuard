import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import ProfileDrawer from "./ProfileDrawer";
import "../../styles/navbar.css";
function Navbar() {
  const { user } = useAuth();

  return (
    <header id="navbar" className="navbar">

      <div id="navbar-logo" className="navbar-logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="InternGuard" />
            
        </Link>
      </div>

      <div id="navbar-content" className="navbar-content">

        <nav id="navbar-links" className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/analyze" className="navbar-link">
            Analyze
          </Link>

          <Link to="/directory" className="navbar-link">
            Scam insights
          </Link>

          <Link to="/opportunity" className="navbar-link">
            Opportunities
          </Link>

          <Link to="/about" className="navbar-link">
            About Us
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </nav>

        <div id="navbar-actions" className="navbar-actions">
          {user ? (
            <ProfileDrawer />
          ) : (
            <Link to="/register" className="navbar-register">
              Register Now
            </Link>
          )}
        </div>

      </div>

    </header>
  );
}

export default Navbar;