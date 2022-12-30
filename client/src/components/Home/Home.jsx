import "./Home.css";
import Nav from "../Nav/Nav";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Home() {
  const estadoGames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getVideogames());
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(estadoGames.length / 15) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const busqueda = "gran";
  const encontrar = estadoGames.filter(function (name) {
    if (busqueda == "") return estadoGames;
    return (name.name.toLowerCase().includes(busqueda));
  });

  // games.filter(x => x.name.toLowerCase().includes(""))

  return (
    <>
      <div className="home">
        <Nav />

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
//   const [games, setGames] = useState([]);
//   //Necistamos almacenar el objeto de info para la paginacion
//   const [info, setInfo] = useState({});

//   const initialUrl =
//     "https://api.rawg.io/api/games?key=2ebf403c8d3847529cb6010c7dc76678&page=2";

//   //Funcion para hacer una request al Link de la API
//   const fetchGames = (url) => {
//     fetch(url)
//       //La funcion fetch retorna una promesa
//       .then((respuesta) => respuesta.json())
//       //con respuesta.json, lo convertimos en una estructura JavaScript
//       .then((datosDeLaApi) => {
//         setGames(datosDeLaApi.results);
//         setInfo(datosDeLaApi);
//       })
//       //datosDeLaApi, son los datos de la api, para poder consumir en JavaScript
//       .catch((error) => console.log(error));
//   };

//   function onPreviuos() {
//     fetchGames(info.previous);
//   }
//   //Debemos pasarles estas funciones al componente de "pagination"
//   function onNext() {
//     fetchGames(info.next);
//   }

//   //UseEffect , nos permite manejar los efectos colaterales
//   useEffect(() => {
//     //Llamamos a la funcion, y la damos el parametro deseado (initialUrl)
//     fetchGames(initialUrl);
//   }, []);

//   return (
//     <>
//       <div className="home">
//         <Nav />
//         <Card games={games} />
//         <Pagination
//           prev={info.prev}
//           next={info.next}
//           onPreviuos={onPreviuos}
//           onNext={onNext}
//         />
//       </div>
//     </>
//   );
// }

//!video minuto 43:50
