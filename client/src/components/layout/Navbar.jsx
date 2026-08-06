import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

      {/* Search */}
      <div className="relative w-96">

        <FaSearch className="absolute left-4 top-3 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-lg py-2 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
         <button
  onClick={toggleTheme}
  className="text-2xl text-gray-600 hover:text-blue-600 transition"
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

        {/* Notification */}
        <button className="relative text-2xl text-gray-600 hover:text-blue-600">

          <FaBell />

          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-4xl text-gray-600" />

          <div>

            <h4 className="font-semibold">
              Admin
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;