const { SuperHeroModel } = require("../database-models/SuperHero");

const getAllSuperHeroes = async () => {
  const superHeroes = await SuperHeroModel.find({});

  return superHeroes;
};

const getSuperHeroById = async (args) => {
  const superHero = await SuperHeroModel.findOne({ _id: args._id });

  return superHero;
};

module.exports = {getAllSuperHeroes,getSuperHeroById};
