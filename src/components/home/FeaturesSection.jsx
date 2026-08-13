const FeatureSection = () => {
  return (
    <section className="features" id="features">
      <div className="features-head">
        <p className="features-label">What InternGuard Offers</p>

        <h2>TOOLS FOR SMARTER INTERNSHIP SEARCHES</h2>
        <p className="features-text">
          InternGuard brings the tools you need to discover opportunities,evaluate risks, and make more informed internship decisions.
        </p>
      </div>

      <div className="features-grid">
        <article className="feature-card">
          <span className="feature-number">01</span>
          <h3>Opportunity Analysis</h3>
          <p>Review internship details and identify potential warning signs before you decide to apply.</p>
        </article>

        <article className="feature-card">
          <span className="feature-number">02</span>
          <h3>Company Verification</h3>
          <p>Check available company information and verification details to better understand an internship opportunity.</p>
        </article>

        <article className="feature-card">
          <span className="feature-number">03</span>
          <h3>Opportunity Discovery</h3>
          <p>Explore internship opportunities based on your interests and preferences from one convenient place.</p>
        </article>

        <article className="feature-card">
          <span className="feature-number">04</span>
          <h3>Risk Indicators</h3>
          <p>Understand potential warning signs so you can investigate an opportunity before sharing information or applying.</p>
        </article>
      </div>
    </section>
  );
};

export default FeatureSection;