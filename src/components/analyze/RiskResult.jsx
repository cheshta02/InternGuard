import RiskFactors from "./RiskFactors";

function RiskResult({ result, onReset }) {
  if (!result) {
    return null;
  }

  const score = result.riskScore ?? 0;
  const level = result.riskLevel || "LOW RISK";

  const scoreClass = score >= 60 ? "high" : score >= 30 ? "medium" : "low";

  return (
    <section className="risk-result">
      <div className="result-header">
        <div>
          <span className="result-label"> ANALYSIS RESULT </span>
          <h2> {result.job_title || "Internship / Job Opportunity"} </h2>
          {result.company_name && (<p className="result-company"> {result.company_name} </p>)}
        </div>
        <button type="button" className="analyze-again-btn" onClick={onReset}> Analyze Another </button>
      </div>

      <div className={`risk-score-card ${scoreClass}`}>
        <div className="risk-score-number">
          {score}
          <span>/100</span>
        </div>

        <div className="risk-score-info">
          <span className="risk-score-label"> RISK SCORE </span>
          <strong> {level} </strong>
        </div>
      </div>

      <div className="result-section">
        <h3> Risk Analysis </h3>
        <p> {result.summary} </p>
      </div>

      <div className="result-section">
        <h3> Risk Points </h3>
        <RiskFactors factors={result.riskPoints}/>
      </div>

      <div className="result-grid-two-col">
        {result.positive_signals?.length > 0 && (
          <div className="result-section">
            <h3> Positive Signals </h3>
            <ul className="positive-signals">
              {result.positive_signals.map( (signal, index) => (<li key={index}> {signal} </li>))}
            </ul>
          </div>
        )}
        
        {result.suggestions?.length > 0 && (
          <div className="result-section">
            <h3> Suggestions </h3>
            <ul className="suggestions-list">
              {result.suggestions.map( (suggestion, index) => (<li key={index}> {suggestion}</li>))}
            </ul>
          </div>
        )}
      </div>

      <div className="result-section recommendation-section">
        <h3> Recommendation </h3>
        <p> {result.recommendation} </p>
      </div>

    

      <div className="analysis-disclaimer">
        <strong>Important:</strong>{" "}
        InternGuard identifies potential risk signals. A high or low score is not definitive proof that an opportunity is fraudulent or legitimate. Verify important information independently.
      </div>
    </section>
  );
}

export default RiskResult;