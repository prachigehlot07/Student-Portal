import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      login(); 
      navigate("/dashboard");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-xs">*Must be "example@domain.com" format.</p>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded-md text-white font-semibold"
          >
            Log In
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <a href="/signup" className="underline hover:text-pink-400">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
