const MissionSection = () => {
  return (
    <section className="mission" id="mission">
      <div className="mission-wrap">
        <div className="mission-text">
          <span className="label">Our Mission</span>

          <h2>Helping students make<span> smarter career choices.</span></h2>

          <p>
            Finding an internship should be about more than getting an offer.Students need to know whether an opportunity is genuine, relevant,and worth their time.
          </p>

          <p>InternGuard's mission is to give students the information and tools they need to evaluate opportunities with greater clarity before they commit.</p>
        </div>

        <div className="mission-card">
          <div className="mission-top">
            <span className="mission-num">01</span>
            <span className="mission-tag">Student first</span>
          </div>

          <h3>More clarity. Less uncertainty.</h3>

          <p>
            We want students to spend their time on opportunities that can genuinely contribute to their skills, experience, an career.
          </p>

          <div className="mission-line"></div>

          <div className="mission-list">
            <div className="mission-item">
              <span>01</span>
              <p>Understand opportunities before applying</p>
            </div>

            <div className="mission-item">
              <span>02</span>
              <p>Recognise potential risks and warning signs</p>
            </div>

            <div className="mission-item">
              <span>03</span>
              <p>Make career decisions with better information</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;