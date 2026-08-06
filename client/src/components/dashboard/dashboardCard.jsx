import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
} from "react-icons/fa";

function DashboardCard({ title, value }) {
  const getCardData = () => {
    switch (title) {
      case "Students":
        return {
          icon: <FaUserGraduate />,
          color: "bg-blue-500",
          growth: "+12%",
        };

      case "Faculty":
        return {
          icon: <FaChalkboardTeacher />,
          color: "bg-green-500",
          growth: "+5%",
        };

      case "Departments":
        return {
          icon: <FaBuilding />,
          color: "bg-purple-500",
          growth: "+2%",
        };

      case "Courses":
        return {
          icon: <FaBook />,
          color: "bg-orange-500",
          growth: "+8%",
        };

      default:
        return {
          icon: null,
          color: "bg-gray-500",
          growth: "",
        };
    }
  };

  const card = getCardData();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-green-600 text-sm mt-2">
            {card.growth} this month
          </p>
        </div>

        <div
          className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
        >
          {card.icon}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;