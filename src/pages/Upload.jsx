import { useState, useEffect } from "react";
import { uploadCSV, getJobStatus } from "../services/api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a CSV");

    const res = await uploadCSV(file);
    setJobId(res.jobId);
  };

  useEffect(() => {
    if (!jobId) return;

    const interval = setInterval(async () => {
      const job = await getJobStatus(jobId);
      setStatus(job);

      if (job.status === "completed") {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [jobId]);

  return (
    <div className="page">
      <h3>Bulk Report Upload</h3>

      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload CSV</button>

      {status && (
        <p>
          Status: {status.status} — Processed {status.processed} / {status.total}
        </p>
      )}
    </div>
  );
}
