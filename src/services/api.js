const BASE_URL = "http://localhost:5000";

export async function submitReport(data) {
  const res = await fetch(`${BASE_URL}/reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function uploadCSV(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/reports/upload`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}

export async function getJobStatus(jobId) {
  const res = await fetch(`${BASE_URL}/reports/job-status/${jobId}`);
  return res.json();
}

export async function getDashboard(month) {
  const res = await fetch(`${BASE_URL}/dashboard?month=${month}`);
  return res.json();
}
