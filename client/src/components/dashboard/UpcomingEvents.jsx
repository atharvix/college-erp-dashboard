import { FaCalendarAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Mid Semester Exam",
    date: "15 Aug 2026",
  },
  {
    id: 2,
    title: "Faculty Meeting",
    date: "20 Aug 2026",
  },
  {
    id: 3,
    title: "Hackathon",
    date: "25 Aug 2026",
  },
  {
    id: 4,
    title: "Placement Drive",
    date: "30 Aug 2026",
  },
];

function UpcomingEvents() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        Upcoming Events
      </h2>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between border-b pb-3 last:border-none"
          >
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-blue-600 text-xl" />

              <div>
                <p className="font-medium">
                  {event.title}
                </p>

                <p className="text-sm text-gray-500">
                  {event.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;