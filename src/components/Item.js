export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li
      className="h-12 bg-white p-3 rounded-xl flex gap-4 justify-between items-center"
      style={
        item.packed
          ? { backgroundColor: "#F97316" }
          : { backgroundColor: "#ffffff" }
      }
    >
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button
        className="h-6 w-6 rounded-xl bg-gray-200"
        onClick={() => onDeleteItems(item.id)}
      >
        x
      </button>
    </li>
  );
}
