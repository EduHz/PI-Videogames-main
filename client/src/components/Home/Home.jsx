import "./Home.css";
import Nav from "../Nav/Nav";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames} from "../../redux/actions";

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

  const encontrar = estadoGames.filter(function (name) {
    if (busqueda === "") return estadoGames;
    if (busqueda === "A to Z") {
      return estadoGames.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else {
      if (busqueda === "Z to A")
        return estadoGames.sort(function (a, b) {
          return -1 * a.name.localeCompare(b.name);
        });
    }
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
      return name.genres.toLowerCase().includes(busqueda);
    return name.name.toLowerCase().includes(busqueda);
  });

  console.log(estadoGames.reverse());

  return (
    <>
      <div className="home">
        <Nav />
        <form
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
        </form>

        <select>
          <option>--Genre--</option>
          <option onClick={(e) => setBusqueda("action")}>Action</option>
          <option onClick={(e) => setBusqueda("adventure")}>Adventure</option>
          <option onClick={(e) => setBusqueda("arcade")}>Arcade</option>
          <option onClick={(e) => setBusqueda("board games")}>
            Board Games
          </option>
          <option onClick={(e) => setBusqueda("card")}>Card</option>
          <option onClick={(e) => setBusqueda("casual")}>Casual</option>
          <option onClick={(e) => setBusqueda("educational")}>
            Educational
          </option>
          <option onClick={(e) => setBusqueda("family")}>Family</option>
          <option onClick={(e) => setBusqueda("fighting")}>Fighting</option>
          <option onClick={(e) => setBusqueda("indie")}>Indie</option>
          <option onClick={(e) => setBusqueda("massively multiplayer")}>
            Massively Multiplayer
          </option>
          <option onClick={(e) => setBusqueda("platformer")}>Platformer</option>
          <option onClick={(e) => setBusqueda("puzzle")}>Puzzle</option>
          <option onClick={(e) => setBusqueda("racing")}>Racing</option>
          <option onClick={(e) => setBusqueda("rpg")}>RPG</option>
          <option onClick={(e) => setBusqueda("shooter")}>Shooter</option>
          <option onClick={(e) => setBusqueda("simulation")}>Simulation</option>
          <option onClick={(e) => setBusqueda("sports")}>Sports</option>
          <option onClick={(e) => setBusqueda("strategy")}>Strategy</option>
        </select>
        <select>
          <option>Order by</option>
          <option onClick={(e) => setBusqueda("A to Z")}>🍏 A to Z</option>
          <option onClick={(e) => setBusqueda("Z to A")}>🧟 Z to A</option>
        </select>

        {encontrar.length > 0 ? (
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
