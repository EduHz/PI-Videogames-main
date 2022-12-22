import Nav from "../Nav/Nav";
import "./DetailVideogame.css";
import logo from "../../assets/pngegg.png";
import { useSelector, useDispatch } from "react-redux";
import { getVideogameById } from "../../../src/redux/actions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DetailVideogame() {
  const dispatch = useDispatch();
  const game = useSelector((store) => store.searchVideogameById);
  const idPage = useLocation().pathname.slice(8);

  useEffect(() => {
    dispatch(getVideogameById(idPage));
  }, []);

  return (
    <>
      <Nav />
      <div className="container-detail">
        <div className="card-detail">
          <img className="detail-img" src={game.image} alt="demo" />
          <h3>{game.name}</h3>
          <h4>
            Genres <br />
            ◽{game.genres}
            <br />
            Rating<br /> ◽{game.rating}
            <br />
            Release Date<br /> ◽{game.released}
            <br />
            <div className="platforms">
              Plataforms<br />
              ◽{game.platforms}
            </div>
          </h4>
          <div className="p-detail">{game.description}</div>
        </div>
        <img className="samus" src={logo} alt="" />
      </div>
    </>
  );
}

// Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
//  Descripción
//  Fecha de lanzamiento
//  Rating
//  Plataformas
// Ruta de creación de vid

// "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>",
