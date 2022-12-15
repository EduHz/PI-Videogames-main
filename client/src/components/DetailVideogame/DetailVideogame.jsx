import Nav from "../Nav/Nav";
import "./DetailVideogame.css";
import logo from "../../assets/pngegg.png";


export default function DetailVideogame(props) {

  console.log(props.match.params.id)

  return (
    <>
      <Nav />
      <div className="container-detail">
        <div className="card-detail">
          <img
            className="detail-img"
            src="https://images3.alphacoders.com/274/274397.jpg"
            alt="demo"
          />

          <h3>GTA IV</h3>
          <h4>
            Genres : Action - Adventure
            <br />
            Rating : 4.3
            <br />
            Release date : 10/2/2010
            <br />
            Plataforms : PS3 - PC
          </h4>
          <p className="p-detail">
            Rockstar Games went bigger, since their previous installment of the
            series. You get the complicated and realistic world-building from
            Liberty City of GTA4 in the setting of lively and diverse Los
            Santos, from an old fan favorite GTA San Andreas. 561 different
            vehicles (including every transport you can operate) and the amount
            is rising with every update. <br />
            Simultaneous storytelling from three unique perspectives: <br />
            Follow Michael, ex-criminal living his life of leisure away from
            the past, Franklin, a kid that seeks the better future, and Trevor,
            the exact past Michael is trying to run away from. <br />
            GTA Online will provide a lot of additional challenge even for the
            experienced players, coming fresh from the story mode. Now you will
            have other players around that can help you just as likely as ruin
            your mission. Every GTA mechanic up to date can be experienced by
            players through the unique customizable character, and community
            content paired with the leveling system tends to keep everyone busy
            and engaged.
          </p>
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
