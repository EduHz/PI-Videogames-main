const { Router } = require("express");
const genres = require("./Genres");
const router = Router();

// Aca van las rutas

router.use("/Genres", genres);

module.exports = router;
