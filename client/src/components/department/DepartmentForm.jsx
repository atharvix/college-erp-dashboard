import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DepartmentForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    hod: "",
    faculty: "",
    students: "",
    status: "Active",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Department Saved Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Department Name */}
        <div>
          <label className="block mb-2 font-medium">
            Department Name
          </label>
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Computer Science"
  className="w-full border rounded-lg p-3"
  required
/>
        </div>

        {/* Department Code */}
        <div>
          <label className="block mb-2 font-medium">
            Department Code
          </label>

          <input
  type="text"
  name="code"
  value={formData.code}
  onChange={handleChange}
  className="w-full border rounded-lg p-3"
  required
/>
        </div>

        {/* HOD */}
        <div>
          <label className="block mb-2 font-medium">
            Head of Department
          </label>

          <input
            type="text"
            name="hod"
            value={formData.hod}
            onChange={handleChange}
            placeholder="Dr. Rajesh Sharma"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Faculty */}
        <div>
          <label className="block mb-2 font-medium">
            Faculty Count
          </label>

          <input
  type="number"
  name="faculty"
  value={formData.faculty}
  onChange={handleChange}
  className="w-full border rounded-lg p-3"
  required
/>
        </div>

        {/* Students */}
        <div>
          <label className="block mb-2 font-medium">
            Student Count
          </label>

          <input
  type="number"
  name="students"
  value={formData.students}
  onChange={handleChange}
  className="w-full border rounded-lg p-3"
  required
/>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

      </div>

      {/* Description */}
      <div className="mt-6">
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write department description..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button
  type="button"
  onClick={() => navigate("/departments")}
  className="px-6 py-3 border rounded-lg hover:bg-gray-100"
>
  Cancel
</button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Save Department
        </button>

      </div>
    </form>
  );
}

export default DepartmentForm;