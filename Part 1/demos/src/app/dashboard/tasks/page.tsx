import { title } from "process";
import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Update the project documentation",
      description:
        "Ensure that the project documentation is up to date with the latest changes and features.",
      status: "in-progress",
      dueDate: "2023-10-15",
    },
    {
      id: 2,
      title: "Fix login bug",
      description:
        "Resolve the issue preventing users from logging in with Google accounts.",
      status: "pending",
      dueDate: "2023-10-20",
    },
    {
      id: 3,
      title: "Design new landing page",
      description:
        "Create a modern and responsive design for the new landing page.",
      status: "completed",
      dueDate: "2023-09-30",
    },
    {
      id: 4,
      title: "Implement dark mode",
      description: "Add dark mode support to the application settings.",
      status: "in-progress",
      dueDate: "2023-11-01",
    },
    {
      id: 5,
      title: "Write unit tests",
      description:
        "Increase code coverage by writing unit tests for the user module.",
      status: "pending",
      dueDate: "2023-10-25",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>

        {/*Task List Section*/}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-9 hover:shadow-lg transition-shadow duration-300"
              style={{
                borderColor:
                  task.status === "completed"
                    ? "green"
                    : task.status === "in-progress"
                    ? "yellow"
                    : "red",

                borderStyle: "solid",
              }}
            >
              <div className="flex flex-col">
                <h2 className="font-bold">{task.title}</h2>
                <p className="text-sm text-blue-700 mt-2">{task.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
              <section className="flex space-x-4">
                <span
                  className={`px-4 py-3 text-center text-sm rounded-full ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : task.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {task.status}
                </span>
                {/* Action Buttons */}
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                {task.status !== "completed" && (
                  <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">Mark as Complete</button>)}

                <button className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">Delete</button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
