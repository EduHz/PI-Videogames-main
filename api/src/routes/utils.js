const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genre, Platform } = require("../db");

const getAPIinfo = async () => {
  var gets = [1, 2, 3, 4].map(
    async (e) =>
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=25&page=${e}`
      )
  );
  let allGets = await Promise.all(gets);
  let apiURL = allGets.reduce((prev, curr) => {
    return prev.concat(curr.data.results);
  }, []);

  const apiDATA = apiURL.map((el) => {
    return {
      id: el.id,
      name: el.name,
      image: el.background_image,
      rating: el.rating,
      genres: el.genres.map((el) => el.name),
      platforms: el.platforms.map((el) => el.platform.name),
    };
  });
  return apiDATA;
};

const getDBinfo = async () => {
  return await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Platform,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

const getAllGames = async () => {
  const APIinfo = await getAPIinfo();
  const DBinfo = await getDBinfo();
  const infoTotal = APIinfo.concat(DBinfo);
  return infoTotal;
};

const getGamesByName = async (name) => {
  const apiURL = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`
  );
  const apiDATA = await apiURL.data.results.map((el) => {
    return {
      id: el.id,
      name: el.name,
      image: el.background_image,
      rating: el.rating,
      genres: el.genres,
      platforms: el.platforms,
    };
  });
  return apiDATA;
};

module.exports = { getAPIinfo, getDBinfo, getAllGames, getGamesByName };
