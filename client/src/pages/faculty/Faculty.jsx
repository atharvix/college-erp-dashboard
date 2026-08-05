import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import facultyData from "../../data/facultyData";

import FacultySearch from "../../components/faculty/FacultySearch";
import FacultyFilters from "../../components/faculty/FacultyFilters";
import FacultyStats from "../../components/faculty/FacultyStats";
import FacultyTable from "../../components/faculty/FacultyTable";

function Faculty() {
     const navigate = useNavigate();
            const [searchTerm, setSearchTerm] = useState("");
        const [facultyList, setFacultyList] = useState(facultyData);

        const [departmentFilter, setDepartmentFilter] = useState("");
        const [designationFilter, setDesignationFilter] = useState("");
        const [statusFilter, setStatusFilter] = useState("");
        const filteredFaculty = facultyList.filter((teacher) => {
 const matchesSearch =
  teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
  teacher.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
  teacher.department.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesDepartment =
    departmentFilter === "" ||
    teacher.department === departmentFilter;

  const matchesDesignation =
    designationFilter === "" ||
    teacher.designation === designationFilter;

  const matchesStatus =
    statusFilter === "" ||
    teacher.status === statusFilter;

  return (
    matchesSearch &&
    matchesDepartment &&
    matchesDesignation &&
    matchesStatus
  );
});
  
  return (
  <div className="p-6">

    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Faculty Management
      </h1>

      <button
  onClick={() => navigate("/faculty/add")}
  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  <FaPlus />
  Add Faculty
</button>
    </div>

    {/* Statistics */}
    <FacultyStats faculty={filteredFaculty} />

    {/* Search */}
    <FacultySearch
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
    
    <FacultyFilters
  departmentFilter={departmentFilter}
  setDepartmentFilter={setDepartmentFilter}
  designationFilter={designationFilter}
  setDesignationFilter={setDesignationFilter}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
/>
  <FacultyTable faculty={filteredFaculty} />
  </div>
);
}

export default Faculty;