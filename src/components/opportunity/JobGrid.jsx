import JobCard from "./JobCard";

const JobGrid = ({ jobs = [] }) => {
  if (jobs.length === 0) {
    return (
      <div className="job-grid-empty">
        <h3>No opportunities found</h3>
        <p>Try searching with a different job role or location.</p>
      </div>
    );
  }

  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          type={job.type}
          description={job.description}
          skills={job.skills}
          postedDate={job.postedDate}
          applyLink={job.applyLink}
        />
      ))}
    </div>
  );
};

export default JobGrid;