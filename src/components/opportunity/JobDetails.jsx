const JobDetails = ({ job, onClose }) => {
  if (!job) {
    return null;
  }

  return (
    <div className="job-details-overlay">
      <div className="job-details">
        <button className="close-details" onClick={onClose}>
          {" "}
          ×{" "}
        </button>
        <span className="job-source"> {job.source} </span>
        <h2> {job.title} </h2>
        <h3> {job.company} </h3>

        <div className="job-detail-info">
          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>
            <strong>Stipend:</strong> {job.stipend}
          </p>

          <p>
            <strong>Work Mode:</strong> {job.workMode}
          </p>

          <p>
            <strong>Category:</strong> {job.category}
          </p>

          <p>
            <strong>Posted:</strong>{" "}
            {job.postedDate
              ? new Date(job.postedDate).toLocaleDateString()
              : "Not available"}
          </p>
        </div>

        <div className="job-full-description">
          <h4>Job Description</h4>

          <p>{job.description}</p>
        </div>

        {job.sourceUrl && (
          <a
            href={job.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apply-link"
          >
            View Original Listing
          </a>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
