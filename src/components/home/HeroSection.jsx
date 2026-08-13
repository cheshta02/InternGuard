import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-label">Your Internship Safety Guide</p>

          <h1 id="hero-title">INTERNGUARD</h1>

          <h2 className="hero-tagline">
            WHERE OPPORTUNITIES<br />MEET SECURITY
          </h2>

          <p className="hero-text"> Discover opportunities, verify companies, and identify potential risks before you apply.</p>

          <div className="hero-actions">
            <Link to="/opportunities" className="hero-btn hero-btn-main">Explore Opportunities</Link>
            <Link to="/about" className="hero-btn hero-btn-alt">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;