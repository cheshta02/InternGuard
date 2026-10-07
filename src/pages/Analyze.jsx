import { useState } from "react";
import AnalyzeForm from "../components/analyze/AnalyzeForm";
import RiskResult from "../components/analyze/RiskResult";
import { analyzeWithGemini } from "../utils/gemini";
import { buildFinalAnalysis } from "../utils/analyzer";
import "../styles/analyze.css";
import MainSection from "../components/analyze/MainSection";

function Analyze() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState("");

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (!result || typeof result !== "string") {
          reject(new Error("Unable to read the uploaded image."));
          return;
        }
        const base64 = result.split(",")[1];
        resolve({base64, mimeType: file.type,});
      };

      reader.onerror = () => {
        reject(new Error("Unable to read the uploaded image."));
      };

      reader.readAsDataURL(file);
    });
  };

  const handleAnalyze = async ({
    description,
    image,
  }) => {
    setLoading(true);
    setPageError("");
    setResult(null);

    try {
      let imageData = null;
      if (image) {
        imageData = await fileToBase64(image);
      }

      const aiAnalysis = await analyzeWithGemini({
        text: description,
        imageBase64: imageData?.base64 || null,
        imageMimeType: imageData?.mimeType || null,
      });

      const finalResult = buildFinalAnalysis(aiAnalysis);
      setResult(finalResult);
      window.scrollTo({ top: 0, behavior: "smooth",});

    } catch (error) {
      console.error("InternGuard analysis error:", error);

      setPageError(
        error.message ||
          "Something went wrong while analyzing the opportunity."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setPageError("");
    window.scrollTo({ top: 0, behavior: "smooth",});
  };

  return (
    <main className="analyze-page">
      
      <MainSection/>

      {!result && (
      <section className="analyze-container">

        <div className="analyze-visual">
          <div className="analyze-visual-image">
            <img src="https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AaH_TCxCyUiRGEFkzXynhHQ.png" alt="InternGuard security"/>
          </div>

          <div className="analyze-visual-content">
            <span>SMARTER CAREER DECISIONS</span>
            <h2> Your career search, <br /> <strong>fortified.</strong></h2>
            <p>
              Your career search, company details, screenshots and documents — InternGuard analyzes the information for potential risks before you apply.
            </p>
          </div>
        </div>

        <div className="analyze-form-wrapper">
          <div className="analyze-form-header">
            <h2>Analyze Your Opportunity</h2>
            <p>Check an internship before you apply.</p>
          </div>
          <AnalyzeForm onAnalyze={handleAnalyze} loading={loading}/>
          {pageError && ( <div className="analyze-page-error"> {pageError} </div>)}
        </div>

      </section>
    )}

    {result && (
      <section className="analyze-container analyze-result-container">
        <RiskResult result={result} onReset={handleReset}/>
      </section>
    )}

  </main>
  );
}

export default Analyze;