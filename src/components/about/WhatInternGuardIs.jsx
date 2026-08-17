const internGuardPoints = [
  {
    id: 1,
    title: "Evaluate before you apply",
    description: "Understand an internship opportunity and identify possible warning signs before moving forward.",
  },
  {
    id: 2,
    title: "Make decisions with confidence",
    description: "Get a clearer view of an opportunity so you can decide whether it is worth your time.",
  },
  {
    id: 3,
    title: "Find opportunities that matter",
    description: "Explore opportunities with a focus on relevance, quality, and student value.",
  },
];

const WhatInternGuardIs = () => {
  return (
    <section className="what-intern-guard" id="what-intern-guard">
      <div className="what-intern-guard-container">
        <div className="what-intern-guard-content">
          <span className="section-label">What is InternGuard?</span>

          <h2>A smarter way to make <span> better internship decisions.</span></h2>
          <p>
            InternGuard is a platform built to help students evaluate internship opportunities before investing their time and effort.
            Instead of relying only on job descriptions or promises made by recruiters, InternGuard helps students look at an opportunity from multiple perspectives.
          </p>
          <p>
            From identifying potential risks to exploring relevant opportunities, InternGuard brings the information students need
            into one simple platform. The goal is not to decide for you, but to help you make a more informed decision.
          </p>

          <div className="what-intern-guard-points">
            {internGuardPoints.map((point) => (
              <div className="what-point" key={point.id}>
                <span className="point-number">
                  {String(point.id).padStart(2, "0")}
                </span>

                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="what-intern-guard-side">
          <div className="guard-card">
            <div className="guard-card-top">
              <span className="guard-dot"></span>
              <span>InternGuard</span>
            </div>

            <div className="guard-card-main">
              <span className="guard-card-label">Before you commit</span>

              <h3>Know what <br /> you're getting into.</h3>
              <p>Your time, effort, and career choices deserve more than a quick look at an internship listing.</p>
            </div>

            <div className="guard-card-bottom">
              <span>Evaluate</span>
              <span>Understand</span>
              <span>Decide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatInternGuardIs;