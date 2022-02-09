const { SuperPowerModel } = require("../database-models/SuperPower");

const getAllSuperPowers = async () => {
  const superPowers = await SuperPowerModel.find({});

  return superPowers;
};

const getSuperPowerById = async (args) => {
  const superPower = await SuperPowerModel.findOne({ _id: args._id });

  return superPower;
};

module.exports = { getSuperPowerById, getAllSuperPowers };
