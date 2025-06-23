import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white text-center p-8">
      <div className="mb-6">
        <a href="/Login" target="_blank" rel="noopener noreferrer">
          <img src={Logo} className="w-50 h-50 mx-auto" alt="app logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-2">The Scholarium</h1>
      <h2 className="text-xl italic mb-6">Student Portal</h2>
      <div className="flex gap-4">
        <Link to="Login">
          <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md transition">
            Login
          </button>
        </Link>
        <Link to="Signup">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
