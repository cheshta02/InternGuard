function ScamCard({ scam, onView }) {
  const riskClass = scam.risk.toLowerCase();

  return (
    <article className="scam-card">
      <div className="scam-top">
        <div>
          <span className={`risk risk-${riskClass}`}> {scam.risk} Risk </span>
          <h3>{scam.company}</h3>
          <p className="scam-role">{scam.role}</p>
        </div>

        <span className="scam-type">{scam.type}</span>
      </div>

      <div className="scam-info">
        <span>{scam.location}</span>
        <span>{scam.category}</span>
      </div>

      <p className="scam-desc">{scam.description}</p>

      <div className="scam-foot">
        <span>{scam.reported} reports</span>
        <span>{scam.date}</span>
      </div>

      <button type="button" className="scam-btn" onClick={() => onView(scam)}> View Details </button>
    </article>
  );
}

export default ScamCard;