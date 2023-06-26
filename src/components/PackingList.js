import { useState } from "react";
import Item from "./Item";
import Stats from "./Stats";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 mt-4">
        <ul className="w-full md:w-3/4 bg-white bg-opacity-20 rounded-xl p-6 flex gap-2 flex-wrap">
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              key={item.id}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <Stats items={items} />
      </div>

      <div className="my-4 flex gap-2">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 rounded-xl"
          disabled={items.length < 2}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {items.length !== 0 && (
          <button
            className="p-2 w-24 bg-orange-500 rounded-xl"
            onClick={() => clearItems()}
            disabled={items.length === 0}
          >
            Clear List
          </button>
        )}
      </div>
    </>
  );
}
