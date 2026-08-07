import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function DepartmentTable({ departments }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">HOD</th>
            <th className="p-4 text-left">Faculty</th>
            <th className="p-4 text-left">Students</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr
              key={department.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{department.name}</td>

              <td className="p-4">{department.hod}</td>

              <td className="p-4">{department.faculty}</td>

              <td className="p-4">{department.students}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    department.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {department.status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() =>
                      navigate(`/departments/details/${department.id}`)
                    }
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/departments/edit/${department.id}`)
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() =>
                      alert(`Delete ${department.name}`)
                    }
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

export default DepartmentTable;