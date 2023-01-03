import "./Home.css";
import Nav from "../Nav/Nav";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

export default function Home() {
  const estadoGames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(estadoGames.length / 15) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const encontrar = estadoGames.filter(function (res) {
    if (busqueda === "created") return res.id.length > 0;
    if (busqueda === "existing") return res.id < 999999;
    if (busqueda === "rating")
      return estadoGames.sort(function (a, b) {
        return b.rating - a.rating;
      });
    if (busqueda === "A to Z")
      return estadoGames.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    if (busqueda === "Z to A")
      return estadoGames.sort(function (a, b) {
        return -1 * a.name.localeCompare(b.name);
      });
    if (
      busqueda === "rpg" ||
      busqueda === "platformer" ||
      busqueda === "fighting" ||
      busqueda === "shooter" ||
      busqueda === "adventure" ||
      busqueda === "arcade" ||
      busqueda === "racing" ||
      busqueda === "board games" ||
      busqueda === "indie" ||
      busqueda === "casual" ||
      busqueda === "family" ||
      busqueda === "educational" ||
      busqueda === "strategy" ||
      busqueda === "simulation" ||
      busqueda === "sports" ||
      busqueda === "card" ||
      busqueda === "action" ||
      busqueda === "puzzle" ||
      busqueda === "massively multiplayer"
    )
      return res.genres.toLowerCase().includes(busqueda);
    return res.name.toLowerCase().includes(busqueda);
  });

  const options = [
    { value: "", text: "--Search Filters--" },
    { value: "A to Z", text: "🍏 A to Z " },
    { value: "Z to A", text: "🧟‍♂️ Z to A " },
    { value: "rating", text: "⭐ Rating" },
    { value: "created", text: "🔨 Created" },
    { value: "existing", text: "✅ Existing" },
    { value: " ", text: "--Genres--" },
    { value: "rpg", text: "🦇 RPG" },
    { value: "platformer", text: "💻 Platformer" },
    { value: "fighting", text: "🤼 Fighting" },
    { value: "shooter", text: "🔫 Shooter" },
    { value: "adventure", text: "⛺ Adventure" },
    { value: "arcade", text: "🎮 Arcade" },
    { value: "racing", text: "🚙 Racing" },
    { value: "board games", text: "🏓 Board Games" },
    { value: "indie", text: "🤯 Indie" },
    { value: "casual", text: "🎲 Casual" },
    { value: "family", text: "👩‍👩‍👦‍👦 Family" },
    { value: "educational", text: "📕 Educational" },
    { value: "strategy", text: "🤓 Strategy" },
    { value: "simulation", text: "🦸‍♂️ Simulation" },
    { value: "sports", text: "⚽ Sports" },
    { value: "card", text: "🃏 Card" },
    { value: "action", text: "💥 Action" },
    { value: "puzzle", text: "🧩 Puzzle" },
    { value: "massively multiplayer", text: "👥 Multiplayer" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
    setBusqueda(event.target.value);
  };
  console.log(encontrar);

  return (
    <>
      <div className="home">
        <Nav />
        <form
          className="form-css"
          onSubmit={(e) => {
            e.preventDefault(); //Previene que se recargue la pagina
            setBusqueda(""); //Para que se vacie el input
          }}
        >
          <input
            type="text"
            placeholder="Search Game..."
            onChange={(e) => setBusqueda(e.target.value.toLowerCase())} //(e.target.value) para tomar valor input
          />

          <select
            value={selected}
            onChange={handleChange}
            className="selected-css"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </form>

        {encontrar[0] ? (
          encontrar
            .slice(page * 15 - 15, page * 15)
            .map((game) => (
              <Card
                id={game.id}
                key={game.id}
                name={game.name}
                rating={game.rating}
                image={game.image}
                genres={game.genres}
              />
            ))
        ) : (
          <h2>No hay nada</h2>
        )}
      </div>
      {encontrar.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>
          {[...Array(Math.ceil(encontrar.length / 15))].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < Math.ceil(encontrar.length / 15)
                ? ""
                : "pagination__disable"
            }
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
}
