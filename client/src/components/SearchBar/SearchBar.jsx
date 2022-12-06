import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar() {
  const [busqueda, setBusqueda] = useState("");

  const options = [
    {value: '', text: '--Search Filters--'},
    {value: 'apple', text: '🍏 A to Z '},
    {value: 'banana', text: '🧟‍♂️ Z to A '},
    {value: 'kiwi', text: ' ⭐ Ranking'},
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="searchBar">
      <div className="filter">
      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
      <input
        type="text"
        name="busqueda"
        autoComplete="off"
        value={busqueda}
        onChange={(ev) => setBusqueda(ev.target.value)}
      />
      <button type="submit" className="button-search">
        🔍
      </button>
    </div>
  );
}
