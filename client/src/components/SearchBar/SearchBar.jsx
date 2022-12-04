import './SearchBar.css'
import { useState } from "react";


export default function SearchBar() {
  // let playAudio = () => {
  //   new Audio(audio).play();
  // };

  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="searchBar">
      <input
        type="text"
        name="busqueda"
        autoComplete="off"
        value={busqueda}
        onChange={(ev) => setBusqueda(ev.target.value)}
      />
      <button type="submit" className='button-search'>🔍</button>
    </div>
  );
}
