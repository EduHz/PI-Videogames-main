const express = require("express");
const getGenresApi = require("../controllers/getGenres.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const genres = await getGenresApi();
    res.status(200).send(genres);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
});

module.exports = router;
