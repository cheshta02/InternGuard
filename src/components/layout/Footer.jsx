import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer">

      {/* Logo and Description */}
      <div id="footer-logo" className="footer-logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="InternGuard" />
        </Link>

        <p>
          InternGuard helps students discover trusted internships, identify potential risks, and make safer career decisions
          with confidence.
        </p>
      </div>

      {/* Footer Content */}
      <div id="footer-content" className="footer-content">

        {/* Quick Links */}
        <div id="footer-quick-links" className="footer-section">
          <h4>Quick Links</h4>

          <Link to="/" className="footer-link">Home</Link>
          <Link to="/analyze" className="footer-link">Analyze</Link>
          <Link to="/directory" className="footer-link">Scam insights</Link>
          <Link to="/opportunities" className="footer-link">Career Hub</Link>
          <Link to="/about" className="footer-link">About Us</Link>

        </div>

        {/* Contact */}
        <div id="footer-contact" className="footer-section">
          <h4>Contact Info</h4>

          <p className="footer-text">support@internguard.com</p>
          <p className="footer-text">InternGuard Support</p>

        </div>

        {/* Social Links */}
        <div id="footer-social" className="footer-section">
          <h4>Follow Us</h4>

          <a href="https://www.instagram.com" target="_blank" className="footer-social-link">Instagram</a>
          <a href="https://twitter.com" target="_blank" className="footer-social-link">Twitter / X </a>
          <a href="https://www.linkedin.com" target="_blank" className="footer-social-link"> LinkedIn</a>
          <a href="https://www.facebook.com" target="_blank" className="footer-social-link">Facebook</a>
          <a href="https://t.me" target="_blank"  className="footer-social-link"> Telegram </a>

        </div>

      </div>

      {/* Copyright */}
      <div id="footer-bottom" className="footer-bottom">
        <p>© 2026 InternGuard. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;