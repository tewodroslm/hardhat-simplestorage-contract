// import
const hre = require("hardhat");
const run = require("hardhat");
const network = require("hardhat");
// const { hre, run, network } = require("hardhat").hardhatArguments;

// async main
async function main() {
  console.log("start main..");
  const simpleStorage = await hre.ethers.deployContract("SimpleStorage", []);
  console.log("deploy call ... awaiting ..");
  await simpleStorage.waitForDeployment();
  console.log(`SimpleStorage address: ${simpleStorage.target}`);

  // when verifiying check which  network , if remote and not local call verify function
  // 11155111 is sepolia
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    await verify(simpleStorage.target, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value is: ${currentValue}`);

  // update currentvalue
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated value is: ${updatedValue}`);
}

// verfiy and publish programmaticlly instead of doing it manually on the test net
// contract address is needed at least.. arg is the value that is being sent to the constructor of our sol file
// auto verfication could be done on ethscan docs.etherscan.io .. looking at the api they provide and consuming it
// or use already existing hardhat etherscan plugin like the hardhat-etherscan plugin from npmjs.com
// async function verify(contractAddress, arg) {}
// using "run" to run any hardhat task after import we can programmatically verify or
// use ' npx hardhat verify --network sepolia <address> ' command to verify with out a code
// we don't want to call verfiy fn when working local  network and that is where chainId comes to be usefull

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verfied")) {
      console.log("Already Verfied");
    } else {
      console.log(e);
    }
  }
}

// call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
