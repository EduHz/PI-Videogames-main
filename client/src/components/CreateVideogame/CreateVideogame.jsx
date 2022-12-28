import Nav from "../Nav/Nav";
import "./CreateVideogame.css";
import logo from "../../assets/subzero.png";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres } from "../../redux/actions";

export default function CreateVideoGame() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const genres1 = genres.slice(0, 10);
  const genres2 = genres.slice(10, 20);

  const [game, setGame] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const randomPlatforms = [
    "PC",
    "iOS",
    "Android",
    "macOS",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox",
    "PS Vita",
  ];

  const ChangeInput = (e) => {
    if (e.target.name === "genres" || e.target.name === "platforms") {
      const arr = game[e.target.name];
      setGame({
        ...game,
        [e.target.name]: arr.concat(e.target.value),
      });
    } else {
      setGame({
        ...game,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: game.name,
      description: game.description,
      image: game.image,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    };

    // Validaciones
    if (!obj.name) {
      alert("Hey! falta el nombre.");
      return;
    }
    if (!obj.description) {
      alert("Hey! aun falta la descripcion.");
      return;
    }
    if (!obj.released) {
      alert("Hey! falta la fecha de lanzamiento.");
      return;
    }
    if (obj.rating > 5 || obj.rating < 0) {
      alert("Hey! el rating debe estar entre 0 and 5.");
      return;
    }

    dispatch(createVideogame(obj));
    e.target.reset();
    alert("Videogame creado correctamente !");
    /* dispatch(getVideogames()) */

    setGame({
      name: "",
      description: "",
      image: "",
      released: "",
      rating: 0,
      genres: [],
      platforms: [],
    });
  };

  return (
    <>
      <Nav />
      <div className="container-create">
        <img className="subzero" src={logo} alt="" />
        <div className="formulario">
          <h1>Make your Game!</h1>
          <form
            id="survey-form"
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>-Name-</label>
            <input type="text" name="name" value={game.name}></input>
            
            <label>-Released-</label>
            <input type="date" name="released" value={game.released}></input><br />
            <label>-Rating-</label>
            <input type="number" name="rating" value={game.rating} min="0" max="5"></input>
            <label>-Image URL-</label>
            <input type="text" name="image" value={game.image}></input>
            <div className="description-create">
              <label>-Description-</label>
              <input
                className="decription"
                type="text"
                name="description"
                value={game.description}
              ></input>
            </div >
            <div className="platforms-genres">
              <label>-Genres-</label>
              {genres1.map((gen) => (
                <div key={gen.name}>
                  <input type="checkbox" name="genres" value={gen.name}></input>
                  <label name={gen}>{gen.name}</label>
                </div>
              ))}
              <div>
                {genres2.map((gen) => (
                  <div key={gen.name}>
                    <input
                      type="checkbox"
                      name="genres"
                      value={gen.name}
                    ></input>
                    <label name={gen}>{gen.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="platforms-create">
              <label>-Platforms-</label>
              <div>
                {randomPlatforms.map((P) => (
                  <div key={P}>
                    <input type="checkbox" name="platforms" value={P}></input>
                    <label name={P}>{P}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <button type="submit" className="button-create">CREATE</button>
          </form>
        </div>
      </div>
    </>
  );
}
