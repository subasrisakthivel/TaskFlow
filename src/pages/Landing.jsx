// function Landing(){
//     return(
//         <div>
//             <h1>TaskFlow</h1>
//             <p>Manage your Tasks easily</p>
//             <button>Login</button>
//         </div>

//     );
// }
// export default Landing;

function Landing(){

  return(

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          TaskFlow
        </h1>


        <p className="text-xl text-gray-600 mb-8">
          Manage your tasks smarter,
          stay productive every day
        </p>


        <button 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg 
          hover:bg-blue-700 transition"
        >
          Get Started
        </button>


        <div className="flex justify-center gap-6 mt-10">

          <div className="bg-white p-4 rounded-lg shadow">
            Organize Tasks
          </div>


          <div className="bg-white p-4 rounded-lg shadow">
            Track Progress
          </div>


          <div className="bg-white p-4 rounded-lg shadow">
            Improve Productivity
          </div>

        </div>


      </div>

    </div>

  )

}

export default Landing;