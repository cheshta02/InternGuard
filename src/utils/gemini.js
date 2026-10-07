import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key is missing. Add VITE_GEMINI_API_KEY to .env.local");
}

const ai = new GoogleGenAI({apiKey: API_KEY,});

const ANALYSIS_SCHEMA = {
  type: "object",
  properties: {
    summary: {type: "string"},
    company_name: {type: "string"},
    job_title: {type: "string"},
    risk_signals: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {type: "string"},
          description: {type: "string"},
          severity: {
            type: "string",
            enum: ["LOW", "MEDIUM", "HIGH"],
          },
          evidence: {type: "string"},
        },
        required: ["title", "description", "severity", "evidence",],
      },
    },
    positive_signals: {
      type: "array",
      items: {type: "string"}
    },
    recommendation: {type: "string"},
    suggestions: {
      type: "array",
      items: {type: "string"},
    }
  },
  required: ["summary", "company_name", "job_title", "risk_signals", "positive_signals", "recommendation", "suggestions",]
};

const SYSTEM_PROMPT = `
You are the AI analysis engine for InternGuard, an internship and job posting risk-analysis application.
Your job is NOT to definitively declare that an opportunity is a scam.Instead, identify evidence-based warning signs and positive signals.
Analyze:
- registration fees
- application fees
- security deposits
- training fees
- requests for money
- requests for OTPs
- requests for passwords
- requests for bank details
- requests for unnecessary sensitive information
- guaranteed employment
- unrealistic salary or stipend
- suspicious urgency
- pressure to pay quickly
- vague company identity
- suspicious recruiter contact details
- mismatched email domains
- unusual offer-letter language
- missing job responsibilities
- missing company information
- suspicious links
- unrealistic work-from-home promises
- claims of guaranteed placement
- suspicious WhatsApp/Telegram-only communication
- suspicious spelling or formatting when relevant
- requests to purchase equipment or courses
- other indicators of elevated risk
Also identify legitimate positive signals such as:
- clear company identity
- professional domain
- detailed responsibilities
- clear selection process
- realistic compensation
- verifiable contact information
- clear location/work arrangement
Important:
Do not invent facts that are not present in the supplied content.
Return concise, evidence-based findings.
Do not make the final numeric risk score yourself.
InternGuard will calculate the score from your detected signals.
`;

export async function analyzeWithGemini({
  text = "",
  imageBase64 = null,
  imageMimeType = null,
}) {
  if (!API_KEY) {
    throw new Error("Gemini API key is missing. Add VITE_GEMINI_API_KEY to .env.local.");
  }

  const inputParts = [{text: SYSTEM_PROMPT}];

  if (text.trim()) {
    inputParts.push({text: `USER-PROVIDED JOB/INTERNSHIP CONTENT: ${text}`});
  }

  if (imageBase64 && imageMimeType) {
    inputParts.push({
      inlineData: {
        mimeType: imageMimeType,
        data: imageBase64
      },
    });

    inputParts.push({
      text: `The uploaded image is a screenshot/document related to an internship or job opportunity.Read the visible text carefully and analyze the opportunity using only information present in the image.`
    });
  }

  if (!text.trim() && !imageBase64) {
    throw new Error("Please provide text or an image.");
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{role: "user",parts: inputParts}],
    config: {
      responseMimeType: "application/json",
      responseSchema: ANALYSIS_SCHEMA
    }
  });

  if (!response.text) {
    throw new Error("Gemini returned an empty response.");
  }

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini raw response:", response.text);
    throw new Error("Gemini returned an invalid analysis response.");
  }
}