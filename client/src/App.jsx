import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/dashboard/Dashboard";
import Students from "./pages/students/Students";
import AddStudent from "./pages/students/AddStudent";
import EditStudent from "./pages/students/EditStudent";
import StudentDetails from "./pages/students/StudentDetails";

import Faculty from "./pages/faculty/Faculty";
import AddFaculty from "./pages/faculty/AddFaculty";
import EditFaculty from "./pages/faculty/EditFaculty";
import FacultyDetails from "./pages/faculty/FacultyDetails";

import Departments from "./pages/department/Departments";
import AddDepartment from "./pages/department/AddDepartment";
import EditDepartment from "./pages/department/EditDepartment";
import DepartmentDetails from "./pages/department/DepartmentDetails";

import Courses from "./pages/courses/Courses";
import AddCourse from "./pages/courses/AddCourse";
import EditCourse from "./pages/courses/EditCourse";
import CourseDetails from "./pages/courses/CourseDetails";

import Timetable from "./pages/timetable/Timetable";
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
              {/* Faculty Routes */}
      <Route path="/faculty" element={<Faculty />} />

      <Route path="/faculty/add" element={<AddFaculty />} />

      <Route path="/faculty/edit/:id" element={<EditFaculty />} />

      <Route
        path="/faculty/details/:id"
        element={<FacultyDetails />}
      />

      <Route path="/departments" element={<Departments />} />

<Route path="/departments/add" element={<AddDepartment />} />

<Route path="/departments/edit/:id" element={<EditDepartment />} />

<Route
  path="/departments/details/:id"
  element={<DepartmentDetails />}
/>

<Route path="/courses" element={<Courses />} />

<Route path="/courses/add" element={<AddCourse />} />

<Route path="/courses/edit/:id" element={<EditCourse />} />

<Route path="/courses/details/:id" element={<CourseDetails />} />

<Route path="/timetable" element={<Timetable />} />
      </Routes>
    </MainLayout>
  );
}

export default App;