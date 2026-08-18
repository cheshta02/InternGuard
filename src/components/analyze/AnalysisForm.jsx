import { useRef, useState } from "react";

const Analyze = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const cameraInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const addFiles = (newFiles) => {
    if (!newFiles?.length) return;
    setFiles((currentFiles) => [...currentFiles,...Array.from(newFiles),]);
  };

  const handleCameraChange = (event) => {
    addFiles(event.target.files);
    event.target.value = "";
  };

  const handleFileChange = (event) => {
    addFiles(event.target.files);
    event.target.value = "";
  };

  const removeFile = (indexToRemove) => {
    setFiles((currentFiles) =>
      currentFiles.filter((file, index) => index !== indexToRemove)
    );
  };

  const handleGenerate = async (event) => {
    event.preventDefault();
    const cleanText = text.trim();

    if (!cleanText && files.length === 0) {
      return;
    }

    setIsGenerating(true);

    try {
      const formData = new FormData();        // future improvement
      if (cleanText) {
        formData.append("text", cleanText);
      }
      files.forEach((file) => {
        formData.append("files", file);
      });
      console.log("Analysis input:", {
        text: cleanText,
        files,
      });
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const canGenerate = text.trim().length > 0 || files.length > 0;

  return(
    <section>
      <form className="analysis-box" onSubmit={handleGenerate}>

        <textarea className="analysis-input" value={text} onChange={(event) => setText(event.target.value)}
          placeholder="Paste a URL, email, internship details, company information, or anything you want to verify..."
          disabled={isGenerating}
        />

        {files.length > 0 && (
          <div className="analysis-attachments">
            {files.map((file, index) => {

              const isImage = file.type.startsWith("image/");

              return (
                <div className="analysis-attachment" key={`${file.name}-${index}`}>
                  {isImage ? (<img src={URL.createObjectURL(file)} alt={file.name} className="attachment-image"/>) : (
                    <div className="attachment-file-icon"> {file.name.toLowerCase().endsWith(".pdf") ? "PDF" : "FILE"} </div>)
                  }

                  <div className="attachment-info">
                    <span className="attachment-name"> {file.name} </span>
                    <span className="attachment-size"> {(file.size / 1024 / 1024).toFixed(2)} MB </span>
                  </div>

                  <button type="button" className="remove-attachment" onClick={() => removeFile(index)} disabled={isGenerating}
                    aria-label={`Remove ${file.name}`} > x 
                  </button>

                </div>
              );
            })}
          </div>
        )}

        <div className="analysis-toolbar">
          <div className="analysis-tools">

            <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" hidden onChange={handleCameraChange} disabled={isGenerating} >

              <button type="button" className="camera-button" onClick={handleCameraClick} disabled={isGenerating} aria-label="Take or upload a photo"
              title="Take photo">

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 7h3l1.5-2h7L17 7h3v11H4V7Z" />
                  <circle cx="12" cy="12.5" r="3.2" />
                </svg>

              </button>
            </input>

            <input ref={fileInputRef} type="file" multiple hidden onChange={handleFileChange} disabled={isGenerating}>

              <button type="button" className="file-button" onClick={handleFileClick} disabled={isGenerating}>

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M21 12.5v5A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4H12" />
                  <path d="M16 3v6m-3-3h6" />
                </svg>
                <span>Attach</span>

              </button>
            </input>
          </div>

          <button type="submit" className="generate-button" disabled={!canGenerate || isGenerating}>
            {isGenerating ? "GENERATING..." : "GENERATE"}
          </button>

        </div>
      </form>

    </section>
  );
};

export default Analyze;