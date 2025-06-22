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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Users</h1>

      {loading && <p className="text-gray-600 text-lg">Loading users...</p>}
      {error && <p className="text-red-600 text-lg">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-purple-300 rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-purple-700 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-700 text-sm">
                📧 {user.email}
              </p>
              <p className="text-gray-700 text-sm">
                📞 {user.phone}
              </p>
              <p className="text-gray-700 text-sm">
                🌐 {user.website}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
