import DepartmentForm from "../../components/department/DepartmentForm";

function AddDepartment() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Add Department
      </h1>

      <DepartmentForm />

    </div>
  );
}

export default AddDepartment;