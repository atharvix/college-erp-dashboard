import DashboardCard from "../../components/dashboard/DashboardCard";

import RecentActivity from "../../components/dashboard/RecentActivity";

import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import NoticeBoard from "../../components/dashboard/NoticeBoard";
function Dashboard() {
  
  const dashboardStats = [
    { title: "Students", value: "1250" },
    { title: "Faculty", value: "82" },
    { title: "Departments", value: "6" },
    { title: "Courses", value: "35" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Welcome Back, Admin 👋
      </h1>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {dashboardStats.map((item) => (
    <DashboardCard
      key={item.title}
      title={item.title}
      value={item.value}
    />
  ))}
</div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
  <AdmissionChart />
  <DepartmentChart />
</div> */}
      <RecentActivity />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
  <UpcomingEvents />
  <NoticeBoard />
</div>
    </div>
  );
}

export default Dashboard;