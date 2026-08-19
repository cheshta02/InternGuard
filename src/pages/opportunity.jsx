import MainSection from "../components/opportunity/MainSection";
import SearchBar from "../components/opportunity/SearchBar";
import SearchFilter from "../components/opportunity/SearchFilter";
import JobGrid from "../components/opportunity/JobGrid";
import Disclaimer from "../components/opportunity/Disclaimer";
import UpgradePrompt from "../components/opportunity/UpgradePrompt";

import "../styles/opportunity.css"

const Opportunity = () => {

  const hasPremiumAccess = false;
  if (!hasPremiumAccess) {
    return <UpgradePrompt />;
  }

  return (
    <div className="opportunity-page">
      <MainSection />
      <SearchBar />
      <SearchFilter />
      <JobGrid />                 {/* in future api calling and props passing*/}
      <Disclaimer />
    </div>
  );
};

export default Opportunity;