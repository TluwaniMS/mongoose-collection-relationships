const { SuperPowerModel } = require("../database-models/SuperPower");

const createSampleSuperPowersScript = async () => {
  await SuperPowerModel.insertMany();

  console.log(`Sample super powers have been created successfully.`);
};

module.exports = { createSampleSuperPowersScript };
