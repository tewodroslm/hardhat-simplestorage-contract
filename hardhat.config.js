require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  // hardhat comes with internal network by default , that is why it is easyier to do local dev
  defaultNetwork: "hardhat", // local hardhat network will be used when "npx hardhat run scripts/deploy.js"
  // here i will give my rpc url from alchemy .. to deploy to sepolia faucet testnet
  networks: {
    sepolia: {
      // deploying to remote sepolia network when "npx hardhat run scripts/deploy.js --network sepolia"
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      // much quicker to see the deploy contract log here than on testnet !!
      // steps
      // npx hardhat run node   (nodes will be visible on the terminal and it is not on the hardhat network)
      // npx hardhat run scripts/deploy.js --network localhost
      // hardhat network is different from this localhost
      url: "http://127.0.0.1:8545/", // is found from running "npx hardhat run node"
      chainId: 31337,
    },
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // used to verify my contract , key is from https://etherscan.io/myapikey
  },
  sourcify: {
    enabled: true,
  },
  gasReporter: {
    enabled: true, // npx hardhat test
  },
};
