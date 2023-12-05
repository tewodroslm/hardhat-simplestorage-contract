// import task
require("@nomicfoundation/hardhat-toolbox");

task("block-number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Currrent block number ${blockNumber}`);
  }
);
module.exports = {};

// tasks can interact with, deploy etc with contracts just like scripts
// tasks are better for plugin
