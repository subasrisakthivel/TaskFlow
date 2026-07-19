function Summary({
  totalTasks,
  completedTasks,
  pendingTasks,
  highPriorityTasks,
  mediumPriorityTasks,
  lowPriorityTasks,
}) {
  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
        📊 Task Summary
      </h1>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold">📋 Total Tasks</h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-blue-600">
            {totalTasks}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold">✅ Completed</h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-green-600">
            {completedTasks}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold">⏳ Pending</h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-yellow-500">
            {pendingTasks}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold">
            🔥 Completion Rate
          </h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-purple-600">
            {completionRate}%
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold">
            🔴 High Priority
          </h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-red-600">
            {highPriorityTasks}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold">
            🟡 Medium Priority
          </h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-orange-500">
            {mediumPriorityTasks}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg md:text-xl font-bold">
            🟢 Low Priority
          </h2>
          <p className="text-3xl md:text-4xl mt-4 font-bold text-green-500">
            {lowPriorityTasks}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Summary;