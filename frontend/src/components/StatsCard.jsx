function StatsCard({ label, value }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{value}</h3>
    </div>
  );
}

export default StatsCard;
