import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-6">
      <h1 className="text-3xl font-bold text-purple-300 mb-6">Users</h1>

      {loading && <p className="text-purple-200 text-lg">Loading users...</p>}
      {error && <p className="text-red-400 text-lg">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white/10 border border-purple-500/30 text-purple-100 rounded-xl p-4 shadow-md hover:shadow-purple-600/50 transition-all backdrop-blur-sm"
            >
              <h2 className="text-xl font-bold text-purple-300 mb-2">
                {user.name}
              </h2>
              <p className="text-purple-200 text-sm">📧 {user.email}</p>
              <p className="text-purple-200 text-sm">📞 {user.phone}</p>
              <p className="text-purple-200 text-sm">🌐 {user.website}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
