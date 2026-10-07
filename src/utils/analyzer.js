const RISK_WEIGHTS = {
  payment: 25,
  sensitive_information: 20,
  guaranteed_job: 20,
  suspicious_contact: 15,
  unrealistic_offer: 15,
  urgency: 10,
  vague_company: 10,
  suspicious_process: 10,
  suspicious_document: 10,
  other: 5,
};

function classifyRisk(score) {
  if (score >= 60) {
    return "HIGH RISK";
  }

  if (score >= 30) {
    return "MEDIUM RISK";
  }

  return "LOW RISK";
}

function getCategory(signal) {
  const text = `${signal.title || ""} ${signal.description || ""} ${signal.evidence || ""}`.toLowerCase();

  if ( text.includes("fee") || text.includes("payment") || text.includes("deposit") || text.includes("money") || text.includes("course fee")){
    return "payment";
  }

  if ( text.includes("otp") || text.includes("password") || text.includes("bank") || text.includes("sensitive") || text.includes("personal information")){
    return "sensitive_information";
  }

  if (text.includes("guaranteed job") || text.includes("guaranteed employment") || text.includes("guaranteed placement")){
    return "guaranteed_job";
  }

  if(text.includes("email") || text.includes("contact") || text.includes("whatsapp") || text.includes("telegram") || text.includes("recruiter")){
    return "suspicious_contact";
  }

  if (text.includes("unrealistic") || text.includes("salary") || text.includes("stipend") || text.includes("too good")){
    return "unrealistic_offer";
  }

  if(text.includes("urgent") || text.includes("urgency") || text.includes("immediately") || text.includes("limited time") || text.includes("pressure")){
    return "urgency";
  }

  if (text.includes("company identity") || text.includes("vague company") || text.includes("missing company")) {
    return "vague_company";
  }

  if (text.includes("selection process") || text.includes("suspicious process") || text.includes("application process")) {
    return "suspicious_process";
  }

  if (text.includes("offer letter") || text.includes("document") || text.includes("formatting")) {
    return "suspicious_document";
  }

  return "other";
}

function getSeverityMultiplier(severity) {
  switch (severity) {
    case "HIGH":
      return 1;
    case "MEDIUM":
      return 0.7;
    case "LOW":
      return 0.4;
    default:
      return 0.5;
  }
}

export function calculateRiskScore(analysis) {
  if (!analysis || !Array.isArray(analysis.risk_signals)) {
    return {score: 0, level: "LOW RISK", points: [],};
  }

  let total = 0;

  const points = analysis.risk_signals.map((signal) => {
    const category = getCategory(signal);
    const baseWeight = RISK_WEIGHTS[category] || RISK_WEIGHTS.other;
    const multiplier = getSeverityMultiplier(signal.severity);
    const pointsAwarded = Math.max(1, Math.round(baseWeight * multiplier));
    total += pointsAwarded;

    return {
      title: signal.title,
      description: signal.description,
      evidence: signal.evidence,
      severity: signal.severity,
      category,
      points: pointsAwarded,
    };
  });

  const score = Math.min(total, 100);

  return {score, level: classifyRisk(score), points,};
}

export function buildFinalAnalysis(aiAnalysis) {
  const risk = calculateRiskScore(aiAnalysis);

  return {
    ...aiAnalysis,
    riskScore: risk.score,
    riskLevel: risk.level,
    riskPoints: risk.points,
  };
}