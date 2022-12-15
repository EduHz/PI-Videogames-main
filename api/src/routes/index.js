const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genre, Platform } = require("../db");
const { getDBinfo, getAllGames, getGamesByName } = require("./utils");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
  const { name } = req.query;
  let allGames = await getAllGames();
  if (name) {
    const foundGamesAPI = await getGamesByName(name);
    const gamesByNameDB = await getDBinfo();
    let foundGamesDB = gamesByNameDB.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    let allResults = foundGamesAPI.concat(foundGamesDB);
    if (allResults.length) {
      res.status(200).send(allResults);
    } else {
      res.status(404).json(["Sorry, game not found"]);
    }
  } else {
    res.status(200).send(allGames);
  }
});

router.get("/genres", async (req, res) => {
  const apiURL2 = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  const apiGenre = await apiURL2.data.results.map((el) => el.name);

  apiGenre.forEach((el) => {
    Genre.findOrCreate({
      where: {
        name: el,
      },
    });
  });
  const allGenres = await Genre.findAll();
  res.status(200).send(allGenres);
});

router.get("/platforms", async (req, res) => {
  const apiURL3 = await axios.get(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  );
  const apiPlatf = await apiURL3.data.results.map((el) => el.name);
  apiPlatf.forEach((el) => {
    Platform.findOrCreate({
      where: {
        name: el,
      },
    });
  });
  const allPlatf = await Platform.findAll();
  res.status(200).send(allPlatf);
});

router.post("/videogame", async (req, res) => {
  const {
    name,
    description,
    released,
    rating,
    createdAtDb,
    genres,
    platforms,
    image,
  } = req.body;
  const vidGameCreated = await Videogame.create({
    name,
    description,
    released,
    rating,
    createdAtDb,
    image,
  });
  let genreDB = await Genre.findAll({
    where: {
      name: genres,
    },
  });

  await vidGameCreated.addGenre(genreDB);

  let platformDB = await Platform.findAll({
    where: {
      name: platforms,
    },
  });
  await vidGameCreated.addPlatform(platformDB);
  res.send("Videogame created succesfully");
});

router.get("/videogame/:id", async (req, res) => {
  const { id } = req.params;
  if (!id.includes("-")) {
    const detail = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const dat = await detail.data;
    let formated = [
      {
        id: dat.id,
        name: dat.name,
        description: dat.description,
        image: dat.background_image,
        released: dat.released,
        rating: dat.rating,
        genres: dat.genres.map((el) => el.name),
        platforms: dat.platforms.map((el) => el.platform.name),
      },
    ];
    formated.length
      ? res.status(200).json(formated)
      : res.status(404).send("Did not find game by Id");
  } else {
    let gameFound = await Videogame.findByPk(id, {
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
    var arreglo = [];
    arreglo.push(gameFound);

    res.status(200).json(arreglo);
  }
});

module.exports = router;
