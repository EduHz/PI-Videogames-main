const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getGenresApi = async () => {
  //fetchGenre trae crudo
  const fetchGenre = await axios.get(URL);
  //Destructurar result
  const { results } = fetchGenre.data;
  //Traemos los "name" que son los generos
  const allGenres = results?.map((res) => {
    return {
      name: res.name,
    };
  });
  return [...allGenres];
};

module.exports = getGenresApi;
