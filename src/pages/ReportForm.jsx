import { useState } from "react";
import { submitReport } from "../services/api";

export default function ReportForm() {
  const [form, setForm] = useState({
    ngoId: "",
    month: "",
    peopleHelped: "",
    eventsConducted: "",
    fundsUtilized: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitReport(form);
      alert("Report submitted successfully");
      setForm({
        ngoId: "",
        month: "",
        peopleHelped: "",
        eventsConducted: "",
        fundsUtilized: "",
      });
    } catch {
      alert("Error submitting report");
    }
  };

  return (
    <div className="page">
      <h3>Monthly Report Submission</h3>

      <form onSubmit={handleSubmit}>
        <input name="ngoId" value={form.ngoId} placeholder="NGO ID" onChange={handleChange} />
        <input name="month" value={form.month} placeholder="Month (YYYY-MM)" onChange={handleChange} />
        <input name="peopleHelped" value={form.peopleHelped} placeholder="People Helped" onChange={handleChange} />
        <input name="eventsConducted" value={form.eventsConducted} placeholder="Events Conducted" onChange={handleChange} />
        <input name="fundsUtilized" value={form.fundsUtilized} placeholder="Funds Utilized" onChange={handleChange} />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}
