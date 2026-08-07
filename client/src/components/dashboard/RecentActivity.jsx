import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-blue-600" />,
    text: "Rahul Sharma was added as a Student",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-green-600" />,
    text: "Dr. Priya Mehta updated Faculty Profile",
  },
  {
    id: 3,
    icon: <FaBuilding className="text-purple-600" />,
    text: "Computer Science Department created",
  },
  {
    id: 4,
    icon: <FaBook className="text-orange-600" />,
    text: 'New Course "Data Structures" added',
  },
];

function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-6">
        Recent Activities
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 border-b pb-4 last:border-none"
          >
            <div className="text-2xl">
              {activity.icon}
            </div>

            <p className="text-gray-700">
              {activity.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;