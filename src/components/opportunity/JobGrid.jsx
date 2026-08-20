import JobCard from "./JobCard";
import EmptyState from "./EmptyState"

const JobGrid = ({ jobs = [] }) => {
  if (jobs.length === 0) {
    return (<EmptyState />);
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