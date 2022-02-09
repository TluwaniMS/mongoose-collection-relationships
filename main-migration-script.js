const { createSampleMoviesScript } = require("./migration-scripts/MovieMigrationScript");
const { createSampleSuperHeroesScript } = require("./migration-scripts/SuperHeroMigrationScript");
const { createSampleSuperPowersScript } = require("./migration-scripts/SuperPowerMigrationScript");

(async () => {
  await createSampleMoviesScript();
  await createSampleSuperHeroesScript();
  await createSampleSuperPowersScript();
})();
