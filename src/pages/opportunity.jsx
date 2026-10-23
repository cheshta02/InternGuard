import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import JobCard from "../components/opportunity/JobCard";
import JobFilters from "../components/opportunity/JobFilters";
import JobDetails from "../components/opportunity/JobDetails";
import { useAuth } from "../context/AuthContext";
import UpgradePrompt from "../components/opportunity/UpgradePrompt";
import {
  clearOpportunityFilters,
  loadOpportunities,
  setOpportunityFilter,
} from "../redux/opportunitySlice";
import "../styles/opportunity.css";
import MainSection from "../components/analyze/MainSection";

const Opportunities = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { jobs, filters, status, error } = useSelector((state) => state.opportunities);
  const [selectedJob, setSelectedJob] = useState(null);

  const hasPremiumAccess = user?.plan != null && user.plan !== "free";

  useEffect(() => {
    if (!hasPremiumAccess) return undefined;

    const timer = window.setTimeout(() => {
      dispatch(
        loadOpportunities({
          keyword: filters.search.trim() || "internship",
          location: filters.location.trim() || "India",
        }),
      );
    }, 600);

    return () => window.clearTimeout(timer);
  }, [dispatch, filters.search, filters.location, hasPremiumAccess]);

  const filteredJobs = useMemo(() => {
    let result = jobs;

    const search = filters.search.trim().toLowerCase();
    if (search) {
      result = result.filter((job) =>
        `${job.title} ${job.company} ${job.description} ${job.category}`
          .toLowerCase()
          .includes(search),
      );
    }

    if (filters.workMode !== "All") {
      result = result.filter((job) => job.workMode === filters.workMode);
    }

    const category = filters.category.trim().toLowerCase();
    if (category) {
      result = result.filter((job) => job.category.toLowerCase().includes(category));
    }

    result = [...result];
    if (filters.sort === "salary-high") {
      result.sort((a, b) => b.salaryMin - a.salaryMin);
    } else if (filters.sort === "salary-low") {
      result.sort((a, b) => a.salaryMin - b.salaryMin);
    } else if (filters.sort === "company") {
      result.sort((a, b) => a.company.localeCompare(b.company));
    } else {
      result.sort((a, b) => new Date(b.postedDate || 0) - new Date(a.postedDate || 0));
    }

    return result;
  }, [jobs, filters]);

  const handleFilterChange = (key, value) => {
    dispatch(setOpportunityFilter({ key, value }));
  };

  const handleRetry = () => {
    dispatch(
      loadOpportunities({
        keyword: filters.search.trim() || "internship",
        location: filters.location.trim() || "India",
      }),
    );
  };

  if (!hasPremiumAccess) {
    return <UpgradePrompt />;
  }

  return (
    <div className="opportunities-page">
      <MainSection />

      <JobFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClear={() => dispatch(clearOpportunityFilters())}
      />

      {status === "idle" || status === "loading" ? (
        <div className="jobs-state">
          <div className="loader" />
          <p>Finding opportunities...</p>
        </div>
      ) : null}

      {status === "failed" && (
        <div className="jobs-state error-state">
          <h3>Unable to load opportunities</h3>
          <p>{error}</p>
          <button onClick={handleRetry}>Try Again</button>
        </div>
      )}

      {status === "succeeded" && filteredJobs.length === 0 && (
        <div className="jobs-state">
          <h3>No opportunities found</h3>
          <p>Try changing your search or filters.</p>
        </div>
      )}

      {status === "succeeded" && filteredJobs.length > 0 && (
        <>
          <div className="results-header">
            <p>
              Showing <strong>{filteredJobs.length}</strong> opportunities
            </p>
          </div>

          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onViewDetails={setSelectedJob} />
            ))}
          </div>
        </>
      )}

      {selectedJob && (
        <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Opportunities;