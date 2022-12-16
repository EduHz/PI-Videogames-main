const express = require("express");
const getVideogames = require("../controllers/getVideogames")
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const games = await getVideogames();
    res.status(200).send(games);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
});

module.exports = router;