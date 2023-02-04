import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Bitwise", function () {

  async function deployOneYearLockFixture() {
    const [owner] = await ethers.getSigners();

    const Bitwise = await ethers.getContractFactory("Bitwise");
    const bitwise = await Bitwise.deploy();

    return { bitwise, owner };
  }

  describe("Bitwise", function () {
    it("correctly counts bits", async function () {
      const { bitwise } = await loadFixture(deployOneYearLockFixture);

      expect(await bitwise.countBitSetAsm(0)).to.equal(0); // 00000000
      expect(await bitwise.countBitSetAsm(1)).to.equal(1); // 00000001
      expect(await bitwise.countBitSetAsm(7)).to.equal(3); // 00000111
      expect(await bitwise.countBitSetAsm(8)).to.equal(1); // 00001000
      expect(await bitwise.countBitSetAsm(255)).to.equal(8); // 11111111
    });

   
  });

});
