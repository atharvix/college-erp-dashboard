function FacultyStats({ faculty }) {
  const totalFaculty = faculty.length;

  const activeFaculty = faculty.filter(
    (teacher) => teacher.status === "Active"
  ).length;

  const totalDepartments = new Set(
    faculty.map((teacher) => teacher.department)
  ).size;

  const totalProfessors = faculty.filter(
    (teacher) => teacher.designation === "Professor"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Total Faculty</h3>
        <p className="text-3xl font-bold">{totalFaculty}</p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Active Faculty</h3>
        <p className="text-3xl font-bold text-green-600">
          {activeFaculty}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Departments</h3>
        <p className="text-3xl font-bold text-blue-600">
          {totalDepartments}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Professors</h3>
        <p className="text-3xl font-bold text-purple-600">
          {totalProfessors}
        </p>
      </div>
    </div>
  );
}

export default FacultyStats;