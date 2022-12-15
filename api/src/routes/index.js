require("dotenv").config();
const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const { API_KEY } = process.env;

axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`, {
  headers: { "Accept-Encoding": "gzip,deflate,compress" },
});

router.get("/genres", async function (req, res) {
  try {
    const genresAPI = await axios.get(
      `https://api.rawg.io/api/games?key=2ebf403c8d3847529cb6010c7dc76678`,
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    );
    genresAPI.data.results.forEach((p) => {
      Genre.findOrCreate({
        where: { name: p.name },
      });
    });
    const genresDB = await Genre.findAll();
    res.json(genresDB);
  } catch (err) {
    res.status(404).json({ err });
  }
});

module.exports = router;
