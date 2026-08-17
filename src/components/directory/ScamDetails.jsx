function ScamDetails({ scam, onClose }) {
  if (!scam) {
    return null;
  }

  const riskClass = scam.risk.toLowerCase();

  return (
    <div className="scam-modal" role="dialog" aria-modal="true">
      <div className="scam-overlay" onClick={onClose}></div>

      <div className="scam-details">

        <div className="detail-head">
          <span className={`risk risk-${riskClass}`}>
            {scam.risk} Risk
          </span>

          <h2>{scam.company}</h2>
          <p>{scam.role}</p>
        </div>

        <div className="detail-grid">
          <div>
            <span>Location</span>
            <strong>{scam.location}</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>{scam.type}</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>{scam.category}</strong>
          </div>

          <div>
            <span>Reports</span>
            <strong>{scam.reported}</strong>
          </div>

          <div>
            <span>Reported On</span>
            <strong>{scam.date}</strong>
          </div>

          <div>
            <span>Source</span>
            <strong>{scam.source}</strong>
          </div>
        </div>

        <div className="detail-section">
          <h3>What was reported?</h3>
          <p>{scam.description}</p>
        </div>

        <div className="detail-section">
          <h3>Warning Signs</h3>

          <ul>
            {scam.warningSigns.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
        </div>

        <div className="detail-warning">
          <strong>Stay Safe</strong>
          <p>Never send money or sensitive personal information until the organization and offer have been verified.</p>
        </div>

        <button type="button" className="detail-btn" onClick={onClose}> Close </button>
      </div>
    </div>
  );
}

export default ScamDetails;