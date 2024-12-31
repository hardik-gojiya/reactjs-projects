import { useState } from "react";
import { foods, filterItems } from "./assets/Data";

export default function App() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onchange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, onchange }) {
  return (
    <>
      <label>
        Search: <input type="text" value={query} onChange={onchange} />
      </label>
    </>
  );
}

function List({ items }) {
  return (
    <>
      <table>
        <tbody>
          {items.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
