import {Link} from "react-router-dom"
function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="text-center max-w-5xl w-full">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          TaskFlow
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Manage your tasks smarter,
          <br className="hidden md:block" />
          stay productive every day.
        </p>

        <Link
  to="/login"
  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
>
  Get Started
</Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-6 rounded-xl shadow">
            📋 Organize Tasks
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            📈 Track Progress
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🚀 Improve Productivity
          </div>

        </div>

      </div>

    </div>
  );
}

export default Landing;