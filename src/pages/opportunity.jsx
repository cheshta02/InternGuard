import { useEffect, useMemo, useState } from "react";

import JobCard from "../components/opportunity/JobCard";
import JobFilters from "../components/opportunity/JobFilters";
import JobDetails from "../components/opportunity/JobDetails";
import { useAuth } from "../context/AuthContext";
import UpgradePrompt from "../components/opportunity/UpgradePrompt";
import { fetchJobs } from "../services/jobApi";
import "../styles/opportunity.css";
import MainSection from "../components/analyze/MainSection";

const DEFAULT_FILTERS = {
  search: "",
  location: "India",
  workMode: "All",
  category: "",
  sort: "latest",
};

const Opportunities = () => {
  const { user } = useAuth();

  const hasPremiumAccess = user?.plan != "free" && user?.plan != null;

  const [jobs, setJobs] = useState([]);

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const [selectedJob, setSelectedJob] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await fetchJobs({
        keyword: filters.search.trim() || "internship",
        location: filters.location || "India",
      });
      setJobs(result.jobs);
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to load opportunities.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasPremiumAccess) return;
    const timer = setTimeout(() => {loadJobs();}, 600);
    return () => clearTimeout(timer);
  }, [filters.search, filters.location, hasPremiumAccess]);

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    if (filters.search.trim()) {
      const search = filters.search.toLowerCase();

      result = result.filter((job) => {
        const searchableText = `${job.title}
           ${job.company}
           ${job.description}
           ${job.category}`.toLowerCase();

        return searchableText.includes(search);
      });
    }

    if (filters.workMode !== "All") {
      result = result.filter((job) => job.workMode === filters.workMode);
    }

    if (filters.category.trim()) {
      const category = filters.category.toLowerCase();
      result = result.filter((job) => job.category.toLowerCase().includes(category),);
    }

    if (filters.sort === "salary-high") {
      result.sort((a, b) => b.salaryMin - a.salaryMin);
    }

    if (filters.sort === "salary-low") {
      result.sort((a, b) => a.salaryMin - b.salaryMin);
    }

    if (filters.sort === "company") {
      result.sort((a, b) => a.company.localeCompare(b.company));
    }

    if (filters.sort === "latest") {
      result.sort(
        (a, b) => new Date(b.postedDate || 0) - new Date(a.postedDate || 0),
      );
    }
    return result;
  }, [jobs, filters]);

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };
  if (!hasPremiumAccess) {
    return <UpgradePrompt />;
  }

  return (
    <div className="opportunities-page">
      <MainSection />

      <JobFilters filters={filters} setFilters={setFilters} onClear={clearFilters}/>

      {loading && (
        <div className="jobs-state">
          <div className="loader"></div>
          <p>Finding opportunities...</p>
        </div>
      )}

      {!loading && error && (
        <div className="jobs-state error-state">
          <h3>Unable to load opportunities</h3>
          <p> {error}</p>
          <button onClick={loadJobs}> Try Again </button>
        </div>
      )}

      {!loading && !error && filteredJobs.length === 0 && (
        <div className="jobs-state">
          <h3>No opportunities found</h3>
          <p>Try changing your search or filters.</p>
        </div>
      )}

      {!loading && !error && filteredJobs.length > 0 && (
        <>
          <div className="results-header">
            <p> Showing <strong> {filteredJobs.length} </strong> opportunities </p>
          </div>

          <div className="jobs-grid">
            {filteredJobs.map((job) => (<JobCard key={job.id} job={job} onViewDetails={setSelectedJob} />))}
          </div>
        </>
      )}

      {selectedJob && (<JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />)}
    </div>
  );
};

export default Opportunities;
