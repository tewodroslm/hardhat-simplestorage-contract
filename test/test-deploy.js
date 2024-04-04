// const { ethers } = require("hardhat");

// describe("simple storage", () => {
//   let simpleStorage;
//   let simpleStorageFactory;
//   beforeEach(async function () {
//     simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
//     simpleStorage = await simpleStorageFactory.deploy();
//   });

//   it("should start favorite number with 0", async function () {
//     const currentValue = await simpleStorage.retreive();
//     const expectedValue = "0";
//     assert.equals(currentValue.toString(), expectedValue);
//   });
// });
