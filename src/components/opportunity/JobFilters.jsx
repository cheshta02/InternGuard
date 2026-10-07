const JobFilters = ({ filters, setFilters, onClear }) => {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({...prev, [key]: value,}));
  };

  return (
    <div className="job-filters">
      <div className="filter-group">
        <label>Search</label>
        <input type="text" placeholder="Job, company or skill..." value={filters.search} 
          onChange={(e) => updateFilter("search", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Location</label>
        <input type="text" placeholder="e.g. Delhi" value={filters.location} onChange={(e) => updateFilter("location", e.target.value)}/>
      </div>

      <div className="filter-group">
        <label>Work Mode</label>
        <select value={filters.workMode} onChange={(e) => updateFilter("workMode", e.target.value)}>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Category</label>
        <input type="text" placeholder="e.g. IT" value={filters.category} onChange={(e) => updateFilter("category", e.target.value)}/>
      </div>

      <div className="filter-group">
        <label>Sort By</label>
        <select value={filters.sort} onChange={(e) => updateFilter("sort", e.target.value)}>
          <option value="latest">Latest</option>
          <option value="salary-high">Stipend: High to Low</option>
          <option value="salary-low">Stipend: Low to High</option>
          <option value="company">Company</option>
        </select>
      </div>

      <button className="clear-filters-btn" onClick={onClear}> Clear Filters</button>
    </div>
  );
};

export default JobFilters;
