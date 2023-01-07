import Nav from "../Nav/Nav";
import "./DetailVideogame.css";
import logo from "../../assets/pngegg.png";
import { useSelector, useDispatch } from "react-redux";
import { getVideogameById, detailClear } from "../../../src/redux/actions";
import { useEffect } from "react";

export default function DetailVideogame(props) {
  const dispatch = useDispatch();
  const game = useSelector((store) => store.searchVideogameById);
  const idPage = props.match.params.id;

  useEffect(() => {
    dispatch(getVideogameById(idPage));
    return () => {
      dispatch(detailClear());
    };
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div className="container-detail">
        <div className="card-detail">
          <img className="detail-img" src={game.image} alt="demo" />
          <h3>{game.name}</h3>
          <h4>
            Genres <br />◽{game.genres}
            <br />
            Rating
            <br /> ◽{game.rating}
            <br />
            Release Date
            <br /> ◽{game.released}
            <br />
            <div className="platforms">
              Plataforms
              <br />◽{game.platforms}
            </div>
          </h4>
          <div className="p-detail">{game.description}</div>
        </div>
        <img className="samus" src={logo} alt="" />
      </div>
    </>
  );
}
