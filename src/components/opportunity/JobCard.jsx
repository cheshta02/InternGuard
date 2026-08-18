const JobCard = ({ title, company, location, type, description, skills = [], postedDate, applyLink,}) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3 className="job-title">{title}</h3>
          <p className="job-company">{company}</p>
        </div>
        <span className="job-type">{type}</span>
      </div>

      <div className="job-meta">
        <span>{location}</span>
        <span>{postedDate}</span>
      </div>

      <p className="job-description">{description}</p>

      {skills.length > 0 && (
        <div className="job-skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      )}

      <div className="job-card-footer">
        <a href={applyLink} target="_blank" className="apply-button"> Apply Now </a>
      </div>
      
    </div>
  );
};

export default JobCard;