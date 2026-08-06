import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Students",
    path: "/students",
    icon: <FaUserGraduate />,
  },
  {
    name: "Faculty",
    path: "/faculty",
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Departments",
    path: "/departments",
    icon: <FaBuilding />,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: <FaBook />,
  },
  {
    name: "Timetable",
    path: "/timetable",
    icon: <FaCalendarAlt />,
  },
];
  return (
    <div className="w-72 bg-gray-900 text-white min-h-screen p-6 shadow-xl">
     <div className="flex items-center gap-3 mb-10 border-b border-gray-700 pb-6">

  <div className="bg-blue-600 p-3 rounded-xl">
    <FaUniversity className="text-2xl text-white" />
  </div>

  <div>
    <h1 className="text-2xl font-bold text-white">
      College ERP
    </h1>

    <p className="text-gray-400 text-sm">
      Admin Dashboard
    </p>
  </div>

</div>
      <nav className="space-y-2">
  {menuItems.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`
      }
    >
      <span className="text-xl">{item.icon}</span>
      <span>{item.name}</span>
    </NavLink>
  ))}
</nav>

    </div>
  );
}

export default Sidebar;