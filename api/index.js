const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Genre } = require('../api/src/db') 

const getGenresApi = require("./src/controllers/getGenres");

const loadGenre = async () => {
  const genres = await getGenresApi();
  Genre.bulkCreate(genres);
};
loadGenre();

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Now listening at port 3001"); // eslint-disable-line no-console
  });
});
