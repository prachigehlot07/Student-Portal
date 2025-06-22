import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login"); // route to login page
  };
    return (
        <nav className="sticky top-0 z-50 bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    Scholarium
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-pink-400">Home</Link>
                    <Link to="/about" className="hover:text-pink-400">About</Link>
                    <Link to="/contact" className="hover:text-pink-400">Contact</Link>
                    <Link to="/users" className="hover:text-purple-300">Users</Link>
                    <Link to="/dashboard" className="hover:text-pink-400">Dashboard</Link>
                    <button
                        onClick={handleLogout}
                        className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-md text-sm font-medium"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
