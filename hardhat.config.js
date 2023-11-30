require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  // hardhat comes with internal network by default , that is why it is easyier to do local dev
  defaultNetwork: "hardhat",
  // here i will give my rpc url from alchemy .. to deploy to sepolia faucet testnet
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      // chainId: 58008,
    },
  },
  solidity: "0.8.19",
};
