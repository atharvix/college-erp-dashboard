import { useNavigate } from "react-router-dom";


function StudentTable({ students }) {
    const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Roll No</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Course</th>
            <th className="p-3 text-left">Batch</th>
            <th className="p-3 text-left">Semester</th>
            <th className="p-3 text-left">Section</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
    <tr key={student.id} className="border-t hover:bg-gray-50">

      <td className="p-3">{student.rollNo}</td>
      <td className="p-3">{student.name}</td>
      <td className="p-3">{student.course}</td>
      <td className="p-3">{student.batch}</td>
      <td className="p-3">{student.semester}</td>
      <td className="p-3">{student.section}</td>

      <td className="p-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {student.status}
        </span>
      </td>

      <td className="p-3">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/students/details/${student.id}`)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            View
          </button>

          <button
            onClick={() => navigate(`/students/edit/${student.id}`)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => alert(`Delete ${student.name}`)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </td>

    </tr>
  ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;