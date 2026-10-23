const JobFilters = ({ filters, onFilterChange, onClear }) => {
  const updateFilter = (key) => (event) => onFilterChange(key, event.target.value);

  return (
    <div className="job-filters">
      <div className="filter-group">
        <label htmlFor="opportunity-search">Search</label>
        <input
          id="opportunity-search"
          type="text"
          placeholder="Job, company or skill..."
          value={filters.search}
          onChange={updateFilter("search")}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="opportunity-location">Location</label>
        <input
          id="opportunity-location"
          type="text"
          placeholder="e.g. Delhi"
          value={filters.location}
          onChange={updateFilter("location")}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="opportunity-work-mode">Work Mode</label>
        <select id="opportunity-work-mode" value={filters.workMode} onChange={updateFilter("workMode")}>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="opportunity-category">Category</label>
        <input
          id="opportunity-category"
          type="text"
          placeholder="e.g. IT"
          value={filters.category}
          onChange={updateFilter("category")}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="opportunity-sort">Sort By</label>
        <select id="opportunity-sort" value={filters.sort} onChange={updateFilter("sort")}>
          <option value="latest">Latest</option>
          <option value="salary-high">Stipend: High to Low</option>
          <option value="salary-low">Stipend: Low to High</option>
          <option value="company">Company</option>
        </select>
      </div>

      <button type="button" className="clear-filters-btn" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
};

export default JobFilters;