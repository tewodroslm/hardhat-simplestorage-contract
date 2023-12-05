require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  // hardhat comes with internal network by default , that is why it is easyier to do local dev
  defaultNetwork: "hardhat",
  // here i will give my rpc url from alchemy .. to deploy to sepolia faucet testnet
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      // much quicker to see the deploy contract log here than on testnet !!
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};
