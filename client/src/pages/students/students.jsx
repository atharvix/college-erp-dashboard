import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import students from "../../data/studentData";

import StudentTable from "../../components/student/StudentTable";
import StudentSearch from "../../components/student/StudentSearch";
import StudentFilters from "../../components/student/StudentFilters";
import StudentStats from "../../components/student/StudentStats";

function Students() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [studentList, setStudentList] = useState(students);

  const [courseFilter, setCourseFilter] = useState("");
  const [batchFilter, setBatchFilter] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");

  const filteredStudents = studentList.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse =
      courseFilter === "" || student.course === courseFilter;

    const matchesBatch =
      batchFilter === "" || student.batch === batchFilter;

    const matchesSemester =
      semesterFilter === "" ||
      student.semester.toString() === semesterFilter;

    const matchesSection =
      sectionFilter === "" || student.section === sectionFilter;

    return (
      matchesSearch &&
      matchesCourse &&
      matchesBatch &&
      matchesSemester &&
      matchesSection
    );
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Student Management
        </h1>

        <button
          onClick={() => navigate("/students/add")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <FaPlus />
          Add Student
        </button>
      </div>

      {/* Student Statistics */}
      <StudentStats students={filteredStudents} />

      {/* Search */}
      <StudentSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Filters */}
      <StudentFilters
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        batchFilter={batchFilter}
        setBatchFilter={setBatchFilter}
        semesterFilter={semesterFilter}
        setSemesterFilter={setSemesterFilter}
        sectionFilter={sectionFilter}
        setSectionFilter={setSectionFilter}
      />

      {/* Table */}
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default Students;