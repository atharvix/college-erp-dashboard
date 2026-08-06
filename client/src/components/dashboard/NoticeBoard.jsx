import { FaBullhorn } from "react-icons/fa";

const notices = [
  "Holiday Notice",
  "Exam Schedule Released",
  "Workshop Registration Open",
  "Fee Submission Deadline",
];

function NoticeBoard() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        Notice Board
      </h2>

      <div className="space-y-4">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="flex items-center gap-3 border-b pb-3 last:border-none"
          >
            <FaBullhorn className="text-red-500" />

            <p>{notice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticeBoard;