const { createSampleMoviesScript } = require("./migration-scripts/MovieMigrationScript");
const { createSampleSuperHeroesScript } = require("./migration-scripts/SuperHeroMigrationScript");
const { createSampleSuperPowersScript } = require("./migration-scripts/SuperPowerMigrationScript");
const { connectToDataBase } = require("./database-coinfiguration");

(async () => {
  await connectToDataBase();
  await createSampleMoviesScript();
  await createSampleSuperHeroesScript();
  await createSampleSuperPowersScript();
})().then(() => {
  console.log(`Database population completed successfully...`);
  process.exit();
});
