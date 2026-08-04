function StudentForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Student Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          placeholder="Roll Number"
          className="border rounded-lg p-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-lg p-2"
        />

        <select className="border rounded-lg p-2">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          className="border rounded-lg p-2"
        />

        <select className="border rounded-lg p-2">
          <option>Course</option>
          <option>B.Tech</option>
          <option>BBA</option>
          <option>B.Des</option>
        </select>

        <input
          type="text"
          placeholder="Department"
          className="border rounded-lg p-2"
        />

        <select className="border rounded-lg p-2">
          <option>Semester</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>

        <select className="border rounded-lg p-2">
          <option>Section</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <input
          type="text"
          placeholder="Batch"
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          placeholder="Guardian Name"
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          placeholder="Guardian Phone"
          className="border rounded-lg p-2"
        />

        <textarea
          placeholder="Address"
          className="border rounded-lg p-2 md:col-span-2"
          rows="3"
        ></textarea>

      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Save Student
        </button>
      </div>
    </div>
  );
}

export default StudentForm;