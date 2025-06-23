// Header.jsx
export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <div className="flex justify-between items-center py-4 px-2 border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
    </div>
  );
}
