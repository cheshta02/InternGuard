import { Link } from "react-router-dom";

const UpgradePrompt = () => {
  return (
    <section className="upgrade-prompt">
      <div className="upgrade-card">
        <div className="upgrade-icon"><span>✦</span></div>
        <p className="upgrade-label">PREMIUM FEATURE</p>
        <h1 className="upgrade-title">Unlock Better Opportunities</h1>

        <p className="upgrade-text">
          Access verified internship opportunities curated to help you discover safer and more relevant opportunities with InternGuard.
        </p>

        <div className="upgrade-features">
          <div className="upgrade-feature">
            <span>✓</span>
            <p>Access verified opportunities</p>
          </div>

          <div className="upgrade-feature">
            <span>✓</span>
            <p>Discover trusted companies</p>
          </div>

          <div className="upgrade-feature">
            <span>✓</span>
            <p>Search opportunities with confidence</p>
          </div>
        </div>

        <Link to="/register" className="upgrade-button">
          Upgrade Your Access
          <span>→</span>
        </Link>

        <p className="upgrade-note">Create an account and choose a premium plan to continue.</p>
      </div>
    </section>
  );
};

export default UpgradePrompt;