import "./Home.css";
import Nav from "../Nav/Nav";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Loading from "../Loading/Loading";

export default function Home() {
  const estadoGames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filter, setfilter] = useState("");

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

  const result = () =>
    estadoGames.filter(function (res) {
      if (filter === "created") {
        return res.id.length > 0 
      } else if (filter === "existing") {
        return res.id >= 0;
      } else if (filter === "rating") {
        return estadoGames.sort((a, b) => b.rating - a.rating);
      } else if (filter === "A to Z") {
        return estadoGames.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === "Z to A") {
        return estadoGames.sort((a, b) => -1 * a.name.localeCompare(b.name));
      } else if (
        filter === "rpg" ||
        filter === "platformer" ||
        filter === "fighting" ||
        filter === "shooter" ||
        filter === "adventure" ||
        filter === "arcade" ||
        filter === "racing" ||
        filter === "board games" ||
        filter === "indie" ||
        filter === "casual" ||
        filter === "family" ||
        filter === "educational" ||
        filter === "strategy" ||
        filter === "simulation" ||
        filter === "sports" ||
        filter === "card" ||
        filter === "action" ||
        filter === "puzzle" ||
        filter === "massively multiplayer"
      ) {
        return res.genres.toLowerCase().includes(filter);
      } else return res.name.toLowerCase().includes(filter);
    });

  const options = [
    { value: "", text: "--Search Filters--" },
    { value: "A to Z", text: "🍏 A to Z " },
    { value: "Z to A", text: "🧟‍♂️ Z to A " },
    { value: "created", text: "🔨 Created" },
    { value: "existing", text: "✅ Existing" },
    { value: "rating", text: "⭐ Rating" },
    { value: " ", text: "--Genres--" },
    { value: "action", text: "💥 Action" },
    { value: "adventure", text: "⛺ Adventure" },
    { value: "arcade", text: "🎮 Arcade" },
    { value: "board games", text: "🏓 Board Games" },
    { value: "card", text: "🃏 Card" },
    { value: "casual", text: "🎲 Casual" },
    { value: "family", text: "👩‍👩‍👦‍👦 Family" },
    { value: "fighting", text: "🤼 Fighting" },
    { value: "educational", text: "📕 Educational" },
    { value: "indie", text: "🤯 Indie" },
    { value: "massively multiplayer", text: "👥 Multiplayer" },
    { value: "platformer", text: "💻 Platformer" },
    { value: "puzzle", text: "🧩 Puzzle" },
    { value: "racing", text: "🚙 Racing" },
    { value: "rpg", text: "🦇 RPG" },
    { value: "shooter", text: "🔫 Shooter" },
    { value: "strategy", text: "🤓 Strategy" },
    { value: "simulation", text: "🦸‍♂️ Simulation" },
    { value: "sports", text: "⚽ Sports" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
    setfilter(event.target.value);
  };

  return (
    <>
      <div className="home">
        <Nav />
        <form
          className="form-css"
          onSubmit={(e) => {
            e.preventDefault(); //Previene que se recargue la pagina
            setfilter(""); //Para que se vacie el input
          }}
        >
          <input
            type="text"
            placeholder="Search Game..."
            onChange={(e) => setfilter(e.target.value.toLowerCase())} //(e.target.value) para tomar valor input
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

        {result().length > 0 ? (
          result()
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
          <Loading />
        )}
      </div>
      {result().length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>
          {[...Array(Math.ceil(result().length / 15))].map((_, i) => {
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
              page < Math.ceil(result().length / 15)
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
