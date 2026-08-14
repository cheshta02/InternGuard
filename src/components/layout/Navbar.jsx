import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header id="navbar" className="navbar">

      <div id="navbar-logo" className="navbar-logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="InternGuard" />
        </Link>
      </div>


      <div id="navbar-content" className="navbar-content">

        <nav id="navbar-links" className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>

          <Link to="/analyze" className="navbar-link">Analyze</Link>

          <Link to="/directory" className="navbar-link">Scam insights</Link>

          <Link to="/opportunities" className="navbar-link">Opportunities</Link>

          <Link to="/about" className="navbar-link">About Us</Link>
        </nav>

        <div id="navbar-actions" className="navbar-actions">
          <Link to="/auth" className="navbar-register">Register Now</Link>
        </div>

      </div>

    </header>
  );
}

export default Navbar;