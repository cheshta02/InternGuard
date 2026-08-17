import { useState } from "react";

function DirectoryFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    search: "",
    risk: "All",
    type: "All",
    location: "All",
  });

  const handleFilter = (field, value) => {
    const updatedFilters = {
      ...filters,
      [field]: value,
    };

    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      search: "",
      risk: "All",
      type: "All",
      location: "All",
    };

    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  return (
    <div className="dir-filter">
      {/* Search */}
      <div className="dir-search">
        <label htmlFor="dir-search">Search</label>

        <input id="dir-search"  type="text"  placeholder="Search company or role..."  value={filters.search}
          onChange={(e) =>handleFilter("search", e.target.value)}
        />
      </div>

      {/* Filter Fields */}
      <div className="dir-fields">
        {/* Risk Filter */}
        <div className="dir-field">
          <label htmlFor="dir-risk">Risk Level</label>

          <select id="dir-risk" value={filters.risk} onChange={(e) => handleFilter("risk", e.target.value)}>

            <option value="All">All Risk Levels </option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>

          </select>
        </div>

        {/* Type Filter */}
        <div className="dir-field">
          <label htmlFor="dir-type"> Type </label>

          <select id="dir-type" value={filters.type} onChange={(e) =>handleFilter("type", e.target.value)}>

            <option value="All">All Types</option>
            <option value="Internship">Internship</option>
            <option value="Training + Internship">Training + Internship</option>

          </select>
        </div>

        {/* Location Filter */}
        <div className="dir-field">
          <label htmlFor="dir-location">Location</label>

          <select id="dir-location" value={filters.location} onChange={(e) =>handleFilter("location", e.target.value)}>

            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Noida">Noida</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Chennai">Chennai</option>
            <option value="Ahmedabad">Ahmedabad</option>

          </select>
        </div>

        {/* Clear Button */}
        <button type="button" className="dir-clear" onClick={clearFilters}> Clear Filters </button>

      </div>
    </div>
  );
}

export default DirectoryFilter;