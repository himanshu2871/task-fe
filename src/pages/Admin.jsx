import { useState } from "react";
import { getDashboard } from "../services/api";

export default function Admin() {
  const [month, setMonth] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await getDashboard(month);
    setData(res);
  };

  return (
    <div className="page">
      <h3>Admin Dashboard</h3>

      <input
        placeholder="Month (YYYY-MM)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <button onClick={fetchData}>View Summary</button>

      {data && (
        <div style={{ marginTop: 20 }}>
          <p>Total NGOs Reporting: {data.ngos || 0}</p>
          <p>Total People Helped: {data.people || 0}</p>
          <p>Total Events Conducted: {data.events || 0}</p>
          <p>Total Funds Utilized: ₹{data.funds || 0}</p>
        </div>
      )}
    </div>
  );
}
