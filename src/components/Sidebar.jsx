import { Link } from "react-router-dom";
import {
  FiHome, FiUsers, FiSettings, FiMenu,
  FiHelpCircle, FiBook, FiUser, FiPower, FiInbox
} from "react-icons/fi";

export default function Sidebar({ collapsed, toggleCollapse }) {
  return (
    <div
      className={`
        ${collapsed ? "w-16" : "w-64"} 
        bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
        transition-width duration-300 
        shadow-lg flex flex-col
      `}
    >
      <button onClick={toggleCollapse} className="p-4">
        <FiMenu size={24} />
      </button>

      <nav className="flex-1 px-2 space-y-2">
        {[
          { icon: FiHome, label: "Dashboard", path: "/dashboard" },
          { icon: FiInbox, label: "Notice" },
          { icon: FiUsers, label: "Users", path: "/users" },
          { icon: FiBook, label: "Resources", path: "https://www.geeksforgeeks.org/" },
          { icon: FiUser, label: "My Profile" },      // no path 
          { icon: FiHelpCircle, label: "Help" },      // no path
          { icon: FiSettings, label: "Settings" }     // no path
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            <item.icon size={20} />
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}


