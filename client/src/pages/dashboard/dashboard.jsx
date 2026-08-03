import DashboardCard from "../../components/dashboard/DashboardCard";

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Welcome Back, Admin 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Students" value="1250" />
        <DashboardCard title="Faculty" value="82" />
        <DashboardCard title="Departments" value="6" />
        <DashboardCard title="Courses" value="35" />
      </div>
    </div>
  );
}

export default Dashboard;