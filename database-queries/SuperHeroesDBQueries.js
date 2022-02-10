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
  await SuperHeroModel.updateOne({ _id: args.superHeroId }, { $push: { superPowers: { $each: args.superPowerIds } } });

  return `Operation completed successfully.`;
};

const removeSuperPowerFromSuperHero = async (args) => {
  await SuperHeroModel.updateOne({ _id: args.superHeroId }, { $pull: { superPowers: args.superPowerId } });

  return `Operation completed successfully.`;
};

const linkMultipleSuperHerosToSuperPower = async (args) => {
  await SuperHeroModel.updateMany(
    { _id: { $in: [...args.superHeroIds] } },
    { $push: { superPowers: args.superPowerId } }
  );

  return `Operation completed successfully.`;
};

module.exports = {
  getAllSuperHeroes,
  getSuperHeroById,
  removeSuperPowerFromSuperHero,
  linkSuperPowersToSuperHero,
  linkMultipleSuperHerosToSuperPower
};
