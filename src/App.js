import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function onDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList
        clearItems={clearItems}
        items={items}
        onDeleteItems={onDeleteItems}
        onToggleItem={onToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
