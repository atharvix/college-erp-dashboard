import { FaSearch } from "react-icons/fa";

function FacultySearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="relative">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />

        <input
  type="text"
  placeholder="Search by Name or Employee ID..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
      </div>
    </div>
  );
}

export default FacultySearch;