import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar({ isLoggedIn, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold">Scholarium</span>
        </Link>

        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-pink-400">Home</Link>
          <Link to="/about" className="hover:text-pink-400">About</Link>
          <Link to="/contact" className="hover:text-pink-400">Contact</Link>

          {isLoggedIn && (
            <>
              <Link to="/users" className="hover:text-purple-300">Users</Link>
              <Link to="/dashboard" className="hover:text-pink-400">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;