import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import departments from "../../data/departmentData";


import DepartmentStats from "../../components/department/DepartmentStats";
import DepartmentSearch from "../../components/department/DepartmentSearch";
import DepartmentFilters from "../../components/department/DepartmentFilters";
import DepartmentTable from "../../components/department/DepartmentTable";

function Departments() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentList, setDepartmentList] = useState(departments);
  const [statusFilter, setStatusFilter] = useState("");

  const filteredDepartments = departmentList.filter((department) => {
  const matchesSearch =
    department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    department.hod.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "" ||
    department.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Department Management
        </h1>

        <button
  onClick={() => navigate("/departments/add")}
  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  <FaPlus />
  Add Department
</button>
      </div>

      <DepartmentStats departments={filteredDepartments} />

      <DepartmentSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <DepartmentFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <DepartmentTable departments={filteredDepartments} />
    </div>
  );
}

export default Departments;