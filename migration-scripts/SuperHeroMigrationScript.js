const { SuperHeroModel } = require("../database-models/SuperHero");

const createSampleSuperHeroesScript = async () => {
  await SuperHeroModel.insertMany();

  console.log(`Sample heroes have been created successfully.`);
};

module.exports = { createSampleSuperHeroesScript };
