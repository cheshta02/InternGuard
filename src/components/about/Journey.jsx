const JourneySection = () => {
  return (
    <section className="journey" id="journey">
      <div className="journey-wrap">
        <div className="journey-head">
          <span className="label">Our Journey</span>
          <h2>Built around one simple idea:<span> students deserve better.</span></h2>

          <p>
            InternGuard started with a simple problem. Students often have to make important internship decisions with limited information.We are building a platform that makes those decisions clearer, safer, and more informed.
          </p>
        </div>

        <div className="journey-line">
          <div className="journey-step">
            <div className="journey-dot">01</div>

            <div className="journey-content">
              <span>Where it started</span>
              <h3>A problem worth solving</h3>
              <p>
                Internship listings can look promising on the surface, while important details about their value and potential risks are easy to miss.
              </p>
            </div>
          </div>

          <div className="journey-step">
            <div className="journey-dot">02</div>

            <div className="journey-content">
              <span>What we built</span>
              <h3>One place to evaluate opportunities</h3>
              <p>
                InternGuard brings internship analysis, opportunity discovery,and useful information together so students can assess an
                opportunity before committing their time.
              </p>
            </div>
          </div>

          <div className="journey-step">
            <div className="journey-dot">03</div>

            <div className="journey-content">
              <span>Where we're going</span>
              <h3>Better decisions for every student</h3>
              <p>
                Our goal is to keep improving InternGuard into a trusted companion for students as they explore internships and build their careers.
              </p>
            </div>
          </div>
        </div>

        <div className="journey-end">
          <strong>Know more. Choose better.</strong>
          <span>That's the journey we're building.</span>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;