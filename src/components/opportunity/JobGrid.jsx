import JobCard from "./JobCard";
import EmptyState from "./EmptyState";

const JobGrid = ({ jobs = [], onViewDetails }) => {
  if (jobs.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default JobGrid;
