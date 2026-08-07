function DepartmentStats({ departments }) {
  const totalDepartments = departments.length;

  const activeDepartments = departments.filter(
    (department) => department.status === "Active"
  ).length;

  const totalFaculty = departments.reduce(
    (sum, department) => sum + department.faculty,
    0
  );

  const totalStudents = departments.reduce(
    (sum, department) => sum + department.students,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Departments</h3>
        <p className="text-3xl font-bold">{totalDepartments}</p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Active</h3>
        <p className="text-3xl font-bold text-green-600">
          {activeDepartments}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Faculty</h3>
        <p className="text-3xl font-bold text-blue-600">
          {totalFaculty}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Students</h3>
        <p className="text-3xl font-bold text-purple-600">
          {totalStudents}
        </p>
      </div>

    </div>
  );
}

export default DepartmentStats;