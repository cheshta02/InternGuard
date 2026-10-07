import { useRef, useState } from "react";

function AnalyzeForm({ onAnalyze, loading }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be less than 10 MB.");
      return;
    }

    setError("");

    setImage({file, preview: URL.createObjectURL(file),});
  };

  const removeImage = () => {
    if (image?.preview) {
      URL.revokeObjectURL(image.preview);
    }

    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!description.trim() && !image) {
      setError("Please paste the job description, or upload a screenshot.");
      return;
    }

    try {
      await onAnalyze({
        description: description.trim(),
        image: image?.file || null,
      });
    } catch (err) {
      setError(err.message || "Unable to analyze the opportunity.");
    }
  };

 return (
  <form className="analyze-form" onSubmit={handleSubmit}>

    <div className="analyze-input-options">

      <div className="analyze-option">
        <div className="analyze-option-header">
          <div className="analyze-option-icon">📄</div>
          <div>
            <h3>Deep Text Analysis</h3>
            <p>Document | Scam</p>
          </div>
        </div>
        <div className="analyze-input-group">
          <label htmlFor="job-description"> Paste Job Description </label>
          <textarea id="job-description" rows="7" placeholder="Paste the complete internship/job description or offer letter text here..."
            value={description} onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </div>

      <div className="analyze-option">

        <div className="analyze-option-header">
          <div className="analyze-option-icon">📷</div>
          <div>
            <h3>Visual Evidence Analysis</h3>
            <p>Camera | Shield</p>
          </div>
        </div>

        <div className="analyze-input-group">

          <label> Upload Screenshot / Offer Letter </label>

          <div className="upload-box" onClick={() => fileInputRef.current?.click()}>
            {!image ? (
              <>
                <span className="upload-icon">+</span>
                <strong> Upload Screenshot </strong>
                <small> PNG, JPG, JPEG — maximum 10 MB </small>
              </>
            ) : (
              <div className="selected-image">

                <img src={image.preview} alt="Uploaded job posting"/>
                <button type="button" className="remove-image-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeImage();
                  }}
                >
                  Remove
                </button>

              </div>
            )}
          </div>

          <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={handleImageChange} hidden/>

        </div>
      </div>
    </div>

    {error && ( <div className="analyze-error"> {error} </div>)}

    <button type="submit" className="analyze-submit-btn" disabled={loading}>
      {loading ? "Analyzing..." : "Analyze Opportunity"}
    </button>

  </form>
);
}

export default AnalyzeForm;