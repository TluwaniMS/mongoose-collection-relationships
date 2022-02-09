const { MovieModel } = require("../database-models/Movie");

const getAllMovies = async () => {
  const movies = await MovieModel.find({});

  return movies;
};

const getMovieById = async (args) => {
  const movie = await MovieModel.findOne({ _id: args._id });

  return movie;
};

module.exports = { getAllMovies, getMovieById };
