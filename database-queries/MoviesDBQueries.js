const { MovieModel } = require("../database-models/Movie");

const getAllMovies = async () => {
  const movies = await MovieModel.find({});

  return movies;
};

const getMovieById = async (args) => {
  const movie = await MovieModel.findOne({ _id: args._id });

  return movie;
};

const linkLeadCharacterToMovie = async (args) => {
  await MovieModel.updateOne({ _id: args.movieId }, { $set: { leadCharacter: args.superHeroId } });

  return `Operation completed successfully.`;
};

const removeLeadCharacterFromMovie = async (args) => {
  await MovieModel.updateOne({ _id: args.movieId }, { $set: { leadCharacter: args.superHeroId } });

  return `Operation completed successfully.`;
};

module.exports = { getAllMovies, getMovieById, linkLeadCharacterToMovie, removeLeadCharacterFromMovie };
