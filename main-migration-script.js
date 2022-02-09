const { createSampleMoviesScript } = require("./migration-scripts/MovieMigrationScript");
const { createSampleSuperHeroesScript } = require("./migration-scripts/SuperHeroMigrationScript");
const { createSampleSuperPowersScript } = require("./migration-scripts/SuperPowerMigrationScript");
const { connectToDataBase } = require("./database-coinfiguration");
const { getAllMovies } = require("./database-queries/MoviesDBQueries");

const populateDatabase = async () => {
  await createSampleMoviesScript();
  await createSampleSuperHeroesScript();
  await createSampleSuperPowersScript();
};

(async () => {
  await connectToDataBase();

  const movies = await getAllMovies();

  movies.length === 0 ? await populateDatabase() : (console.log(`Database has already been populated`), process.exit());
})().then(() => {
  console.log(`Database population completed successfully...`);
  process.exit();
});
