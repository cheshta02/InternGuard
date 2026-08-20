const features = [
  {
    id: 1,
    title: "Opportunity Analysis",
    description:
      "Review internship details and identify potential warning signs before you decide to apply.",
  },
  {
    id: 2,
    title: "Company Verification",
    description:
      "Check available company information and verification details to better understand an internship opportunity.",
  },
  {
    id: 3,
    title: "Opportunity Discovery",
    description:
      "Explore internship opportunities based on your interests and preferences from one convenient place.",
  },
  {
    id: 4,
    title: "Risk Indicators",
    description:
      "Understand potential warning signs so you can investigate an opportunity before sharing information or applying.",
  },
];

const FeatureSection = () => {
  return (
    <section className="features" id="features">
      <div className="features-head">
        <p className="features-label">What InternGuard Offers</p>
        <h2>TOOLS FOR SMARTER INTERNSHIP SEARCHES</h2>
        <p className="features-text">
          InternGuard brings the tools you need to discover opportunities, evaluate risks, and make more informed internship decisions.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.id}>
            <span className="feature-number">
              {String(feature.id).padStart(2, "0")}
            </span>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;