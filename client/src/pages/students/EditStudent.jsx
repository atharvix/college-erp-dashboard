import StudentForm from "../../components/student/StudentForm";

function AddStudent() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Add Student
      </h1>

      <StudentForm />
    </div>
  );
}

export default AddStudent;