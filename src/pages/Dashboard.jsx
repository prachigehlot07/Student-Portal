// function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-purple-800">Dashboard</h1>
//         <p className="text-sm text-gray-500">Welcome back, Queen of Code 👑</p>
//       </header>

//       <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         <div className="bg-white p-4 rounded-xl border-l-4 border-purple-500 shadow-sm">
//           <h2 className="text-lg font-semibold text-purple-700">Profile</h2>
//           <p className="text-sm text-gray-600">View or update your account info.</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border-l-4 border-purple-400 shadow-sm">
//           <h2 className="text-lg font-semibold text-purple-600">Courses</h2>
//           <p className="text-sm text-gray-600">Check your enrolled subjects.</p>
//         </div>
//         <div className="bg-white p-4 rounded-xl border-l-4 border-purple-300 shadow-sm">
//           <h2 className="text-lg font-semibold text-purple-500">Performance</h2>
//           <p className="text-sm text-gray-600">See your academic stats.</p>
//         </div>
//       </section>

//       <section className="mt-8 bg-white p-6 rounded-xl shadow">
//         <h3 className="text-xl font-bold text-purple-700 mb-4">Recent Activity</h3>
//         <ul className="space-y-2 text-sm">
//           <li className="text-gray-700">📅 You viewed the AI course on Jun 20</li>
//           <li className="text-gray-700">📚 You completed 3 assignments this week</li>
//           <li className="text-gray-700">🎯 You achieved 90% accuracy in ML quiz</li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default Dashboard;

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-purple-800">Dashboard</h1>
        <p className="text-gray-600 mt-2 text-sm italic">Your academic vibes at a glance 💼</p>
      </header>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* GPA */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-lg font-semibold text-purple-800">GPA</h2>
          <p className="text-4xl font-bold text-gray-800 mt-2">3.4</p>
        </div>

        {/* Attendance */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-lg font-semibold text-purple-800">Attendance</h2>
          <p className="text-4xl font-bold text-gray-800 mt-2">90%</p>
        </div>

        {/* Subjects */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-lg font-semibold text-purple-800">Subjects</h2>
          <p className="text-4xl font-bold text-gray-800 mt-2">12 / 15</p>
        </div>
      </section>

      {/* Standout Feature - Daily Tip */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">✨ Daily Motivation</h3>
        <p className="text-gray-700 italic">
          "Discipline is choosing between what you want now and what you want most." – Abraham Lincoln
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
