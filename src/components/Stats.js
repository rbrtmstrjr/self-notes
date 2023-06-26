export default function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        <em>Please add some list</em>
      </div>
    );

  const statCount = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / statCount) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything to go"
          : `You Have ${statCount} items on your list, and you already pack 
          ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}
