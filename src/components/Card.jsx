// Card.jsx
export default function Card({ title, value }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-2xl">{value}</p>
    </div>
  );
}
