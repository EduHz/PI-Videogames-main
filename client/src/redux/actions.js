export function getVideogames() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/videogames`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_VIDEOGAMES", payload: json });
      });
  };
}

export function searchVideogames(name) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogames?name=${name}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "SEARCH_VIDEOGAMES",
          payload: json,
        });
      });
}

export function getVideogameById(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogame/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_VIDEOGAME_BY_ID",
          payload: json,
        });
      });
}

export function getGenres() {
  return (dispatch) =>
    fetch(`http://localhost:3001/genres`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_GENRES",
          payload: json,
        });
      });
}

export function createVideogame(obj) {
  return (dispatch) =>
    fetch("http://localhost:3001/videogame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_VIDEOGAME",
          payload: json,
        });
      });
}

export function detailClear() {
  return (dispatch) =>
    dispatch({
      type: "DETAIL_CLEAR",
    });
}
