import { FaBars, FaBell, FaSearch, FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../../context/useTheme";

function Navbar({ onMenuClick }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 sm:px-6">
      {/* Mobile menu */}
      <button
        onClick={onMenuClick}
        className="-ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
        aria-label="Open sidebar"
      >
        <FaBars className="text-lg" />
      </button>

      {/* Search */}
      <div className="relative ml-2 hidden w-full max-w-md sm:block">
        <FaSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400" />
        <input
          type="text"
          placeholder="Search students, courses, faculty…"
          className="search-input"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Notifications */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Notifications"
        >
          <FaBell />
          <span className="absolute right-2 top-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </button>

        <span className="hidden h-6 w-px bg-gray-200 dark:bg-gray-700 sm:block" />

        {/* Profile */}
        <div className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-semibold text-white">
            A
          </span>
          <div className="hidden leading-tight sm:block">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Admin</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;