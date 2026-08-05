import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";


function StudentTable({ students }) {
    const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          
            <tr>
              <th className="p-3 text-left">Photo</th>
              <th className="p-3 text-left">Roll No</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Course</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Batch</th>
  
            <th className="p-3 text-left">Semester</th>
            <th className="p-3 text-left">Section</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
    <tr
  key={student.id}
  className="border-t hover:bg-blue-50 transition-colors duration-200"
>

       <td className="p-3">
        <img
          src={student.image}
          alt={student.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td className="p-3">{student.rollNo}</td>
      <td className="p-3">{student.name}</td>
            <td className="p-3">{student.course}</td>

      <td className="p-3">
        {student.department}
      </td>

      <td className="p-3">
        {student.email}
      </td>

      <td className="p-3">
        {student.phone}
      </td>

      <td className="p-3">
        {student.batch}
      </td>
      <td className="p-3">{student.semester}</td>
      <td className="p-3">{student.section}</td>

      <td className="p-3">
              <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          student.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {student.status}
      </span>
      </td>

      <td className="p-3">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => navigate(`/students/details/${student.id}`)}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition"
          >
            <FaEye />
          </button>

          <button
            onClick={() => navigate(`/students/edit/${student.id}`)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full transition"
          >
             <FaEdit />
          </button>

          <button
            onClick={() => alert(`Delete ${student.name}`)}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
          >
            <FaTrash />
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