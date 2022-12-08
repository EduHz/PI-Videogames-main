import "./Home.css";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination/Pagination";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);
  //Necistamos almacenar el objeto de info para la paginacion
  const [info, setInfo] = useState({});

  const initialUrl =
    "https://api.rawg.io/api/games?key=2ebf403c8d3847529cb6010c7dc76678&page=2";

  //Funcion para hacer una request al Link de la API
  const fetchGames = (url) => {
    fetch(url)
      //La funcion fetch retorna una promesa
      .then((respuesta) => respuesta.json())
      //con respuesta.json, lo convertimos en una estructura JavaScript
      .then((datosDeLaApi) => {
        setGames(datosDeLaApi.results);
        setInfo(datosDeLaApi);
      })
      //datosDeLaApi, son los datos de la api, para poder consumir en JavaScript
      .catch((error) => console.log(error));
  };

  function onPreviuos() {
    fetchGames(info.previous);
  }
  //Debemos pasarles estas funciones al componente de "pagination"
  function onNext() {
    fetchGames(info.next);
  }

  //UseEffect , nos permite manejar los efectos colaterales
  useEffect(() => {
    //Llamamos a la funcion, y la damos el parametro deseado (initialUrl)
    fetchGames(initialUrl);
  }, []);

  return (
    <>
      <div className="home">
        <Nav />
        <Card games={games} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPreviuos={onPreviuos}
          onNext={onNext}
        />
        
      </div>
    </>
  );
}
