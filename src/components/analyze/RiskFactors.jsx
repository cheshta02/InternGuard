function RiskFactors({ factors = [] }) {
  if (!factors.length) {
    return ( <div className="risk-factors-empty"> No specific risk signals were detected. </div>);
  }

  return (
    <div className="risk-factors">
      {factors.map((factor, index) => (
        <div className={`risk-factor risk-${factor.severity?.toLowerCase()}`} key={`${factor.title}-${index}`}>
          <div className="risk-factor-header">
            <div>
              <span className="risk-factor-severity"> {factor.severity} </span>
              <h4> {factor.title} </h4>
            </div>
            <span className="risk-factor-points"> +{factor.points}</span>
          </div>

          <p> {factor.description} </p>

          {factor.evidence && (
            <div className="risk-evidence">
              <strong>Evidence:</strong>{" "}
              {factor.evidence}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RiskFactors;