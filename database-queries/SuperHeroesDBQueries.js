const { SuperHeroModel } = require("../database-models/SuperHero");

const getAllSuperHeroes = async () => {
  const superHeroes = await SuperHeroModel.find({}).populate("superPowers");

  return superHeroes;
};

const getSuperHeroById = async (args) => {
  const superHero = await SuperHeroModel.findOne({ _id: args._id }).populate("superPowers");

  return superHero;
};

const linkSuperPowersToSuperHero = async (args) => {
  args.superPowerIds.forEach(async (id) => {
    await SuperHeroModel.updateOne({ _id: args.superHeroId }, { $push: { superPowers: id } });
  });

  return `Operation completed successfully.`;
};

const removeSuperPowerFromSuperHero = async (args) => {
  const superHero = await SuperHeroModel.findOne({ _id: args.superHeroId });

  const indexOfSuperPowerId = superHero.superPowers.indexOf(args.superPowerId);
  superHero.superPowers.splice(indexOfSuperPowerId, 1);

  await superHero.save();

  return `Operation completed successfully.`;
};

module.exports = { getAllSuperHeroes, getSuperHeroById, removeSuperPowerFromSuperHero, linkSuperPowersToSuperHero };
