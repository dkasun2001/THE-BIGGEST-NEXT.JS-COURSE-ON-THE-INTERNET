import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            Welcome to your dashboard! Here you can manage your tasks, view
            statistics, and make adjustments.
          </p>
        </div>

        {/* dashboard grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Task Cards */}

          <Link
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
            href="/dashboard/tasks"
          >
            <div>
              <h2>Tasks</h2>
              <span>⬜</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
