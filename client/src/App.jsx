import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import AddStudent from "./pages/Students/AddStudent";
import EditStudent from "./pages/Students/EditStudent";
import StudentDetails from "./pages/Students/StudentDetails";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/students" element={<Students />} />

        <Route path="/students/add" element={<AddStudent />} />

        <Route path="/students/edit/:id" element={<EditStudent />} />

        <Route
          path="/students/details/:id"
          element={<StudentDetails />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;