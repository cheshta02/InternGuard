import MainSection from "../components/opportunity/MainSection";
import SearchBar from "../components/opportunity/SearchBar";
import SearchFilter from "../components/opportunity/SearchFilter";
import JobGrid from "../components/opportunity/JobGrid";
import Disclaimer from "../components/opportunity/Disclaimer";

const Opportunity = () => {
  return (
    <div className="opportunity-page">
      <SearchBar />
      <SearchFilter />
      <MainSection />
      <JobGrid />                 // in future api calling and props passing
      <Disclaimer />
    </div>
  );
};

export default Opportunity;