function Summary({
    totalTasks,
    completedTasks,
    pendingTasks,
    tasks,
    highPriorityTasks,
    mediumPriorityTasks,
    lowPriorityTasks,
}) {
    const completionRate =
  totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);
  return (
    <section className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        📊 Task Summary
      </h1>

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold">📋 Total Tasks</h2>
          <p className="text-4xl mt-4">{totalTasks}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold">✅ Completed</h2>
          <p className="text-4xl mt-4">{completedTasks}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold">⏳ Pending</h2>
          <p className="text-4xl mt-4">{pendingTasks}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold">🔥 Completion Rate</h2>
          <p className="text-4xl mt-4">{completionRate}%</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
  <h2 className="text-xl font-bold">🔴 High Priority</h2>
  <p className="text-4xl mt-4">{highPriorityTasks}</p>
</div>
<div className="bg-white shadow-lg rounded-2xl p-6 text-center">
  <h2 className="text-xl font-bold">🟡 Medium Priority</h2>
  <p className="text-4xl mt-4">{mediumPriorityTasks}</p>
</div>
<div className="bg-white shadow-lg rounded-2xl p-6 text-center">
  <h2 className="text-xl font-bold">🟢 Low Priority</h2>
  <p className="text-4xl mt-4">{lowPriorityTasks}</p>
</div>

      </div>
    </section>
  );
}

export default Summary;