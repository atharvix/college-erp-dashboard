function StudentStats({ students }) {
  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const totalCourses = new Set(
    students.map((student) => student.course)
  ).size;

  const totalDepartments = new Set(
    students.map((student) => student.department)
  ).size;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Total Students</h3>
        <p className="text-3xl font-bold">{totalStudents}</p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Active Students</h3>
        <p className="text-3xl font-bold text-green-600">
          {activeStudents}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Courses</h3>
        <p className="text-3xl font-bold text-blue-600">
          {totalCourses}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-gray-500">Departments</h3>
        <p className="text-3xl font-bold text-purple-600">
          {totalDepartments}
        </p>
      </div>

    </div>
  );
}

export default StudentStats;