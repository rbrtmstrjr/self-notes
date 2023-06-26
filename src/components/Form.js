import { useState } from "react";

export default function Form({ addItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    addItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3 h-12">
        <select
          className="rounded-xl w-1/4 p-3"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((list) => (
            <option value={list} key={list}>
              {list}
            </option>
          ))}
        </select>
        <input
          className="rounded-xl w-1/2 p-3"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="w-1/4 bg-orange-500 rounded-xl p-3 font-bold">
          Add
        </button>
      </div>
    </form>
  );
}
