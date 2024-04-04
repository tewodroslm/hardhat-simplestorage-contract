const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("simple storage", () => {
  let simpleStorage;
  let simpleStorageFactory;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("should start favorite number with 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("should update favorite number", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store("7");
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });
});
