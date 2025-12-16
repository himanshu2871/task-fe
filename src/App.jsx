import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReportForm from "./pages/ReportForm";
import BulkUpload from "./pages/Upload";
import AdminDashboard from "./pages/Admin";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReportForm />} />
        <Route path="/bulk-upload" element={<BulkUpload />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}
