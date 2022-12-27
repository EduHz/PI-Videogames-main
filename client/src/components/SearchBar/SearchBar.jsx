import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ name }) {
  
  const options = [
    { value: "", text: "--Search Filters--" },
    { value: "aToZ", text: "🍏 A to Z " },
    { value: "zToA", text: "🧟‍♂️  Z to A " },
    { value: "ranking", text: " ⭐ Ranking" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="searchBar">
      <div className="filter">
        <select value={selected} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <form>
        <input type='text' value={name} />
        <button type="submit" className="button-search">
          🔍
        </button>
      </form>
    </div>
  );
}
