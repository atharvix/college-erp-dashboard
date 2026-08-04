import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h1 className="text-2xl font-bold mb-8">
        College ERP
      </h1>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Students
        </NavLink>

        <NavLink
          to="/faculty"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Faculty
        </NavLink>

        <NavLink
          to="/courses"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Courses
        </NavLink>

        <NavLink
          to="/timetable"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Timetable
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;