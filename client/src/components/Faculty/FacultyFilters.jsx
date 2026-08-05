function FacultyFilters({
  departmentFilter,
  setDepartmentFilter,
  designationFilter,
  setDesignationFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      {/* Department */}
      <select
        value={departmentFilter}
        onChange={(e) => setDepartmentFilter(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Departments</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Management">Management</option>
        <option value="Electronics">Electronics</option>
      </select>

      {/* Designation */}
      <select
        value={designationFilter}
        onChange={(e) => setDesignationFilter(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Designations</option>
        <option value="Professor">Professor</option>
        <option value="Associate Professor">Associate Professor</option>
        <option value="Assistant Professor">Assistant Professor</option>
      </select>

      {/* Status */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

    </div>
  );
}

export default FacultyFilters;