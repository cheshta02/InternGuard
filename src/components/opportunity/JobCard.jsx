const JobCard = ({ job, onViewDetails }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3>{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>

        <span className="job-source">{job.source}</span>
      </div>

      <div className="job-info">
        <span>📍 {job.location}</span>

        <span>💰 {job.stipend || "Stipend not disclosed"}</span>

        <span>💼 {job.workMode}</span>

        <span>🏷️ {job.category}</span>
      </div>

      <p className="job-description">
        {job.description?.slice(0, 180)}
        {job.description?.length > 180 ? "..." : ""}
      </p>

      <div className="job-card-footer">
        <span className="verified-badge">✓ Source Verified</span>

        <button onClick={() => onViewDetails(job)} className="view-job-btn">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
