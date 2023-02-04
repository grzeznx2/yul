import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {

  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Bitwise = await ethers.getContractFactory("Bitwise");
    const bitwise = await Bitwise.deploy();

    return { bitwise, unlockTime, lockedAmount, owner, otherAccount };
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
