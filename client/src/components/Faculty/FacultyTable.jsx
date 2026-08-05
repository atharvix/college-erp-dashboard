import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function FacultyTable({ faculty }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Employee ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Designation</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {faculty.map((teacher) => (
            <tr
              key={teacher.id}
              className="border-t hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="p-3">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>

              <td className="p-3">{teacher.employeeId}</td>
              <td className="p-3">{teacher.name}</td>
              <td className="p-3">{teacher.department}</td>
              <td className="p-3">{teacher.designation}</td>
              <td className="p-3">{teacher.email}</td>
              <td className="p-3">{teacher.phone}</td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    teacher.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {teacher.status}
                </span>
              </td>

              <td className="p-3">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() =>
                      navigate(`/faculty/details/${teacher.id}`)
                    }
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/faculty/edit/${teacher.id}`)
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => alert(`Delete ${teacher.name}`)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
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

export default FacultyTable;