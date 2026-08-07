import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/dashboard/DashboardPage";
import StudentsListPage from "./pages/students/StudentsListPage";
import StudentAddPage from "./pages/students/StudentAddPage";
import StudentDetailsPage from "./pages/students/StudentDetailsPage";
import FacultyListPage from "./pages/faculty/FacultyListPage";
import FacultyAddPage from "./pages/faculty/FacultyAddPage";
import FacultyDetailsPage from "./pages/faculty/FacultyDetailsPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Student Routes */}
        <Route path="/students" element={<StudentsListPage />} />
        <Route path="/students/add" element={<StudentAddPage />} />
        <Route path="/students/edit/:id" element={<StudentAddPage />} />
        <Route path="/students/details/:id" element={<StudentDetailsPage />} />

        {/* Faculty Routes */}
        <Route path="/faculty" element={<FacultyListPage />} />
        <Route path="/faculty/add" element={<FacultyAddPage />} />
        <Route path="/faculty/edit/:id" element={<FacultyAddPage />} />
        <Route path="/faculty/details/:id" element={<FacultyDetailsPage />} />

        {/* Fallback Catch-all Route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;