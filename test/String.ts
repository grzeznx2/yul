import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("String", function () {

  async function deployOneYearLockFixture() {
    const [owner] = await ethers.getSigners();

    const StringFactory = await ethers.getContractFactory("String");
    const stringContract = await StringFactory.deploy();

    return { stringContract, owner};
  }

  describe("String", function () {
    it("returns character at index", async function () {
      const { stringContract } = await loadFixture(deployOneYearLockFixture);

      expect(await stringContract.charAt('abcde', 2)).to.equal('0x6300');
      expect(await stringContract.charAt('', 0)).to.equal('0x0000');
      expect(await stringContract.charAt('george', 10)).to.equal('0x0000');
    });
  });

});
