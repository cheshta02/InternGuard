import MainSection from "../components/analyze/MainSection";
import AnalysisForm from "../components/analyze/AnalysisForm";
import"../styles/analyze.css";
const Analyze = () => {
  return (
    <div className="analyze-page">
      <MainSection />
      <AnalysisForm />
    </div>
  );
};

export default Analyze;