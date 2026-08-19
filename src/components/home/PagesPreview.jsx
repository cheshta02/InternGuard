const PagePreview = () => {
  return (
    <section className="page-preview" id="features">
      <div className="page-preview-header">
        <span className="section-label">EXPLORE INTERNGUARD</span>
        <h2>Everything you need to find<br /><span>safer opportunities.</span></h2>
        <p>Check internship risks, explore verified companies, and discover opportunities that match your goals.</p>
      </div>

      <div className="preview-grid">

        <article className="preview-card analyze-preview">
          <span className="preview-tag">RISK ANALYSIS</span>
          <h3>Analyze Before You Apply</h3>
          <a href="/analyze" className="preview-link">Analyze an opportunity → </a>
        </article>

        <article className="preview-card directory-preview">
          <span className="preview-tag">SCAM DIRECTORY</span>
          <h3>Explore Different common Scams</h3>
          <a href="/directory" className="preview-link">Explore directory →</a>
        </article>

        <article className="preview-card opportunity-preview">
          <span className="preview-tag">OPPORTUNITIES</span>
          <h3>Find Better Opportunities</h3>
          <a href="/opportunity" className="preview-link">Find opportunities →</a>
        </article>

      </div>
    </section>
  );
};

export default PagePreview;