import { useState } from "react";

const SearchFilter = ({ onFilter }) => {
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("All");

  const handleJobTypeChange = (event) => {
    const value = event.target.value;
    setJobType(value);
    onFilter({ jobType: value, location });
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
    onFilter({jobType,location: value });
  };

  const handleClear = () => {
    setJobType("All");
    setLocation("All");
    onFilter({ jobType: "All", location: "All"});
  };

  return (
    <div className="search-filter">

      <div className="filter-options">
        <select value={jobType} onChange={handleJobTypeChange}>
          <option value="All">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>

        <select value={location} onChange={handleLocationChange}>
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <button type="button" onClick={handleClear}>Clear Filters</button>
        
      </div>
    </div>
  );
};

export default SearchFilter;