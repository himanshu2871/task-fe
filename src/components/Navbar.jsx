import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>NGO Reporting</h2>
      <div className="links">
        <Link to="/">Submit Report</Link>
        <Link to="/bulk-upload">Bulk Upload</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </div>
    </nav>
  );
}
