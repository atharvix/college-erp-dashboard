function StudentDetails() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Student Details
      </h1>

      <div className="bg-white rounded-lg shadow p-6">

        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Student"
            className="w-36 h-36 rounded-full border-4 border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h3 className="font-semibold text-gray-500">Name</h3>
            <p>Rahul Sharma</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Roll Number</h3>
            <p>101</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Course</h3>
            <p>B.Tech</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Department</h3>
            <p>Computer Science</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Batch</h3>
            <p>2025</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Semester</h3>
            <p>3</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Section</h3>
            <p>A</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Email</h3>
            <p>rahul@example.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Phone</h3>
            <p>9876543210</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Guardian</h3>
            <p>Rajesh Sharma</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Guardian Phone</h3>
            <p>9876543200</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Attendance</h3>
            <p>91%</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Status</h3>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Active
            </span>
          </div>

        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Edit Student
          </button>
        </div>

      </div>

    </div>
  );
}

export default StudentDetails;