const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$12,345",
      change: "+5.2%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "-3.1%",
      isPositive: false,
    },
    {
      title: "Website Traffic",
      value: "15,678",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "New Sign-ups",
      value: "567",
      change: "+1.8%",
      isPositive: true,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Analytics Dashboard
        </h1>
        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
                metric.isPositive
                  ? "border-l-4 border-green-500"
                  : "border-l-4 border-red-500"
              }`}
            >
              <h2 className="text-lg font-semibold text-gray-700">
                {metric.title}
              </h2>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {metric.value}
              </p>
              <p
                className={`text-sm ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </p>
            </div>
          ))}
        </div>
        {/* Chart Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <div className="bg-gray-100 rounded-lg h-72">Chart Placeholder</div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <div className="bg-gray-100 rounded-lg h-72">Chart Placeholder</div>
        </div>
      </div>
      {/*Recent Activities */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
      </div>
    </div>
  );
};

export default Analytics;
