const { MovieModel } = require("../database-models/Movie");

const createSampleMoviesScript = async () => {
  await MovieModel.insertMany();

  console.log(`Sample movies have been created successfully.`);
};

module.exports = { createSampleMoviesScript };
