const journeyData = [
  {
    id: 1,
    label: "Where it started",
    title: "A problem worth solving",
    description:
      "Internship listings can look promising on the surface, while important details about their value and potential risks are easy to miss.",
  },
  {
    id: 2,
    label: "What we built",
    title: "One place to evaluate opportunities",
    description:
      "InternGuard brings internship analysis, opportunity discovery, and useful information together so students can assess an opportunity before committing their time.",
  },
  {
    id: 3,
    label: "Where we're going",
    title: "Better decisions for every student",
    description:
      "Our goal is to keep improving InternGuard into a trusted companion for students as they explore internships and build their careers.",
  },
];

const Journey = () => {
  return (
    <section className="journey" id="journey">
      <div className="journey-wrap">
        <div className="journey-head">
          <span className="label">Our Journey</span>
          <h2>Built around one simple idea: <span> students deserve better.</span></h2>
          <p>
            InternGuard started with a simple problem. Students often have to make important internship decisions with limited information. We are building a platform that makes those decisions clearer, safer, and more informed.
          </p>
        </div>

        <div className="journey-line">
          {journeyData.map((step) => (
            <div className="journey-step" key={step.id}>
              <div className="journey-dot">
                {String(step.id).padStart(2, "0")}
              </div>

              <div className="journey-content">
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-end">
          <strong>Know more. Choose better.</strong>
          <span>That's the journey we're building.</span>
        </div>
      </div>
    </section>
  );
};

export default Journey;