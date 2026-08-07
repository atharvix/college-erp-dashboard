import { useParams } from "react-router-dom";
import departments from "../../data/departmentData";

function DepartmentDetails() {
  const { id } = useParams();

  const department = departments.find(
    (dept) => dept.id === Number(id)
  );
  console.log(department);

  if (!department) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">
          Department Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Department Details
      </h1>

      <div className="bg-white rounded-xl shadow p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h3 className="text-gray-500">Department Name</h3>
            <p className="text-xl font-semibold">
              {department.name}
            </p>
          </div>

          <div>
            <h3 className="text-gray-500">Department Code</h3>
            <p className="text-xl font-semibold">
              {department.code}
            </p>
          </div>

          <div>
            <h3 className="text-gray-500">Head of Department</h3>
            <p className="text-xl font-semibold">
              {department.hod}
            </p>
          </div>

          <div>
            <h3 className="text-gray-500">Faculty Count</h3>
            <p className="text-xl font-semibold">
              {department.faculty}
            </p>
          </div>

          <div>
            <h3 className="text-gray-500">Student Count</h3>
            <p className="text-xl font-semibold">
              {department.students}
            </p>
          </div>

          <div>
            <h3 className="text-gray-500">Status</h3>

            <span
              className={`px-3 py-1 rounded-full ${
                department.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {department.status}
            </span>
          </div>

        </div>

        <div className="mt-8">
          <h3 className="text-gray-500 mb-2">
            Description
          </h3>

          <p>
            {department.description}
          </p>
        </div>

      </div>

    </div>
  );
}

export default DepartmentDetails;