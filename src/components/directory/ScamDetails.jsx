function ScamDetails({ scam, onClose }) {
  if (!scam) {
    return null;
  }

  const riskClass = scam.risk.toLowerCase();

  const detailItems = [
    { label: "Location", value: scam.location },
    { label: "Type", value: scam.type },
    { label: "Category", value: scam.category },
    { label: "Reports", value: scam.reported },
    { label: "Reported On", value: scam.date },
    { label: "Source", value: scam.source }
  ];

  return (
    <div className="scam-modal" role="dialog" aria-modal="true">
      <div className="scam-overlay" onClick={onClose}></div>

      <div className="scam-details">

        <div className="detail-head">
          <span className={`risk risk-${riskClass}`}> {scam.risk} Risk </span>
          <h2>{scam.company}</h2>
          <p>{scam.role}</p>
        </div>

        <div className="detail-grid">
          {detailItems.map((item, index) => (
            <div key={index}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="detail-section">
          <h3>What was reported?</h3>
          <p>{scam.description}</p>
        </div>

        <div className="detail-section">
          <h3>Warning Signs</h3>
          <ul> {scam.warningSigns.map((sign, index) => ( <li key={index}>{sign}</li>))} </ul>
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