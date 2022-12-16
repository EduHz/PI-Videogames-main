const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getVideogames = async () => {
  //fetchGenre trae crudo
  const fetchVideogames = await axios.get(URL);
  //Destructurar result
  const { results } = fetchVideogames.data;
  //Traemos los "name" que son los generos
  const NamesVideogames = results?.map((res) => {
    return {
      id: res.id,
      name: res.name,
    };
  });
  return [...NamesVideogames];
};

module.exports = getVideogames;
