const { Router } = require("express");
// const genres = require("./Genres");
const games = require("./Videogame")
const router = Router();

// Aca van las rutas

// router.use("/Genres", genres);
router.use("/Videogames", games)

module.exports = router;
