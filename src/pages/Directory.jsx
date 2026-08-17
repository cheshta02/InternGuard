import { useState } from "react";

import MainSection from "../components/directory/MainSection";
import ScamData from "../components/directory/ScamData";
import DirectoryFilter from "../components/directory/DirectoryFilter";
import ScamList from "../components/directory/ScamList";
import ScamDetails from "../components/directory/ScamDetails";

function Directory() {
  const [scams, setScams] = useState(ScamData);
  const [selectedScam, setSelectedScam] = useState(null);

  const handleFilter = (filters) => {
    const searchText = filters.search.trim().toLowerCase();

    const filteredScams = ScamData.filter((scam) => {
      const matchesSearch =
        scam.company.toLowerCase().includes(searchText) ||
        scam.role.toLowerCase().includes(searchText) ||
        scam.category.toLowerCase().includes(searchText);

      const matchesRisk = filters.risk === "All" || scam.risk === filters.risk;

      const matchesType = filters.type === "All" || scam.type === filters.type;

      const matchesLocation = filters.location === "All" || scam.location === filters.location;

      return (
        matchesSearch &&
        matchesRisk &&
        matchesType &&
        matchesLocation
      );
    });

    setScams(filteredScams);
  };

  const handleView = (scam) => {
    setSelectedScam(scam);
  };

  const handleClose = () => {
    setSelectedScam(null);
  };

  return (
    <main className="directory-page">

      <MainSection />

      <section className="directory-content">
        <div className="directory-wrap">

          <DirectoryFilter onFilter={handleFilter} />

          <div className="directory-head">
            <div>
              <h2>Reported Opportunities</h2>

              <p>
                {scams.length}{" "}
                {scams.length === 1 ? "report" : "reports"}{" "}
                found
              </p>
            </div>
          </div>

          <ScamList scams={scams} onView={handleView} />

        </div>
      </section>

      {selectedScam && (
        <ScamDetails scam={selectedScam} onClose={handleClose} />
      )}

    </main>
  );
}

export default Directory;